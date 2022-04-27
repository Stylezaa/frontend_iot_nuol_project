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
      className="flex justify-center bg-blue-400 px-2 py-2 text-sm text-white"
   />
    </GridToolbarContainer>
  );
}
export default function DataGridComponent() {
  const { data, loading } = useDemoData({
    dataSet: 'tableData',
    rowLength: 4,
    maxColumns: 6,
  });

  const [tableData, setTableData] = React.useState([])
  // const [dateTime, setDateTime] = useState([]);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 0, hidden: 'true'},
    { field: 'pH', headerName: 'pH', width: 150 },
    { field: 'EC', headerName: 'EC', width: 150 },
    { field: 'DO', headerName: 'DO', width: 150 },
    { field: 'latitude', headerName: 'Latitude', width: 250 },
    { field: 'longitude', headerName: 'Longitude', width: 250 },
    { field: 'lastupdate', headerName: 'Last update', width: 250},
  ]

  const getSensor = async () => {
    try {
    const resp = await axios.get('http://localhost:8000/api/sensor/all');
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
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
          rows={tableData}
          columns={columns}
          loading={loading}
          localeText={{
            toolbarExport: "Export All"
          }}
          components={{
            Toolbar: CustomToolbar,
          }}
      />
    </div>
  );
}