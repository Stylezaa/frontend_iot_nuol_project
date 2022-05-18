import * as React from 'react';
import axios from 'axios';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function CustomToolbar() {

  return (
    <GridToolbarContainer className="flex justify-end">
      <GridToolbarExport 
      printOptions={{ 
        disableToolbarButton: true 
      }} 
      csvOptions={{
        fileName: 'Water Data',
        delimiter: ';',
        utf8WithBom: true,
      }}
      className="flex justify-center bg-blue-500 px-1 py-2 text-xs text-white w-full rounded-sm font-semibold"
   />
    </GridToolbarContainer>
  );
}
export default function DataGridComponent(props) {

  const {
    GridHeight, pHWidth, ECWidth, DOWidth, latitudeWidth, longitudeWidth, last_updateWidth
  } = props;

  const { data, loading } = useDemoData({
    dataSet: 'tableData',
    rowLength: 4,
    maxColumns: 6,
  });

  console.log(data)

  const [tableData, setTableData] = React.useState([])
  // const [dateTime, setDateTime] = useState([]);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 0, hidden: 'true'},
    { field: 'pH', headerName: 'pH', width: pHWidth },
    { field: 'EC', headerName: 'EC', width: ECWidth },
    { field: 'DO', headerName: 'DO', width: DOWidth },
    { field: 'latitude', headerName: 'Latitude', width: latitudeWidth },
    { field: 'longitude', headerName: 'Longitude', width: longitudeWidth },
    { field: 'last_update', headerName: 'Last update', width: last_updateWidth, valueGetter: (params) => new Date(params.row.last_update).toLocaleString()},
  ]

  const getSensor = async () => {
    try {
    const resp = await axios.get('http://localhost:8000/api/chart/1/get/all');
    setTableData(resp.data);
    } catch (error) {
    console.log(error)
    }
  };

  React.useEffect(() => {

      getSensor();

      const interval = setInterval(() => {
      getSensor();
      }, 10000);

      return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: GridHeight, width: '100%' }}>
      <DataGrid
          rows={tableData}
          columns={columns}
          loading={loading}
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