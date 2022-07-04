import * as React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  DataGrid,
  GridToolbarContainer, 
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  useGridApiContext,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
} from '@mui/x-data-grid';
import MenuItem from '@mui/material/MenuItem';

const getJson = (apiRef) => {
  // Select rows and columns
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  // Format the data. Here we only keep the value
  const data = filteredSortedRowIds.map((id) => {
    const row = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });


  return JSON.stringify(data, null, 2);
};

const exportBlob = (blob, filename) => {
  // Save the blob in a json file
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
};

const JsonExportMenuItem = (props) => {

  const apiRef = useGridApiContext();

  const { hideMenu } = props;

  return (
    <MenuItem
      onClick={() => {
        const jsonString = getJson(apiRef);
        const blob = new Blob([jsonString], {
          type: 'text/json',
        });

        exportBlob(blob, 'WaterData.json');

        // Hide the export menu after the export
        hideMenu?.();
      }}
    >
      Download JSON
    </MenuItem>
  );
};

JsonExportMenuItem.propTypes = {
  hideMenu: PropTypes.func,
};

const csvOptions = { delimiter: ';' };

const CustomExportButton = (props) => (
  <GridToolbarExportContainer {...props}>
    <GridCsvExportMenuItem options={csvOptions} />
    <JsonExportMenuItem />
  </GridToolbarExportContainer>
);

const CustomToolbar = (props) => (
  <GridToolbarContainer {...props}>
    <CustomExportButton  className="flex justify-center bg-blue-500 px-1 py-2 text-xs text-white w-full rounded-sm font-semibold" />
  </GridToolbarContainer>
);

export default function CustomExport(props) {

    const {
      GridHeight, pHWidth, ECWidth, DOWidth, latitudeWidth, longitudeWidth, last_updateWidth
    } = props;

    const [tableData, setTableData] = React.useState([])

    const columns = [
      // { field: 'id', headerName: 'ID', width: 0, hidden: 'true'},
      { field: 'pH', headerName: 'pH', width: pHWidth },
      { field: 'DO', headerName: 'DO', width: DOWidth, valueFormatter: (params) => {
        if (params.value == null) {
        return '';
        }
        return `${params.value} μS/c m`;
      }, },
      { field: 'EC', headerName: 'EC', width: ECWidth, valueFormatter: (params) => {
          if (params.value == null) {
          return '';
          }
          return `${params.value} mg/L`;
      }, },
      { field: 'latitude', headerName: 'Latitude', width: latitudeWidth },
      { field: 'longitude', headerName: 'Longitude', width: longitudeWidth },
      { field: 'last_update', headerName: 'Last update', width: last_updateWidth, valueGetter: (last_update) => moment(last_update.row.last_update).parseZone("UTC").format('DD/MM/YYYY HH:mm:ss')},
    ]

    const getSensor = async () => {
      try {
        const resp = await axios.get('https://ceit-iot-api.herokuapp.com/api/chart/1/get/all');
        setTableData(resp.data);
      } catch (error) {
        console.log(error)
      }
    };

    React.useEffect(() => {
        getSensor();

        const interval = setInterval(() => {
        getSensor();
        }, 180000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div style={{ height: GridHeight, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        localeText={{
          toolbarExport: "ດາວໂຫລດຂໍ້ມູນ"
        }}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}