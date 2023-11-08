import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";


const DataTable = ({ columns, rows, url }) => {
    const navigate = useNavigate();

    return (
        <div>
            <Box sx={{
                height: 600,
                width: '80%',
                
            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    onCellClick={(params) => {
                        navigate(`${url}/${params.id}`)

                    }}

                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    )
}

export default DataTable