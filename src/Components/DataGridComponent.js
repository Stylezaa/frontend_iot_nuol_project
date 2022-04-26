import React from 'react'
import { useDemoData } from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import { createSvgIcon } from '@mui/material/utils';
import {
  DataGrid,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridSortedRowIdsSelector,
  GridToolbarContainer,
  gridVisibleSortedRowIdsSelector,
  useGridApiContext,
} from '@mui/x-data-grid';

const getRowsFromCurrentPage = ({ apiRef }) =>
  gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

const getUnfilteredRows = ({ apiRef }) => gridSortedRowIdsSelector(apiRef);

const getFilteredRows = ({ apiRef }) => gridVisibleSortedRowIdsSelector(apiRef);

const ExportIcon = createSvgIcon(
  <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
  'SaveAlt',
);

const CustomToolbar = () => {
  const apiRef = useGridApiContext();

  const handleExport = (options) => apiRef.current.exportDataAsCsv(options);

  const buttonBaseProps = {
    color: 'primary',
    size: 'small',
    startIcon: <ExportIcon />,
  };

  return (
    <GridToolbarContainer className="flex justify-end py-2">
      <Button className="bg-blue-500 text-xs text-white px-2 py-2 mr-4"
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getRowsFromCurrentPage })}
      >
        Current page rows
      </Button>
      <Button className="bg-blue-500 text-xs text-white px-2 py-2 mr-4"
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getFilteredRows })}
      >
        Filtered rows
      </Button>
      <Button className="bg-blue-500 text-xs text-white px-2 py-2"
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getUnfilteredRows })}
      >
        Unfiltered rows
      </Button>
    </GridToolbarContainer>
  );
};


function DataGridComponent() {

    const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });

    return (
        <div className="container mx-auto my-10 max-w-7xl px-6">
            <div style={{ height: 800, width: '100%' }}>
                <DataGrid
                    {...data}
                    loading={loading}
                    components={{ Toolbar: CustomToolbar }}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    initialState={{
                    filter: {
                        filterModel: {
                        items: [
                            { columnField: 'quantity', operatorValue: '>', value: '20000' },
                        ],
                        },
                    },
                    }}
                />
            </div>
        </div>
    )
}

export default DataGridComponent