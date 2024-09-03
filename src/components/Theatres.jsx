import { Box } from '@mui/material'
import React from 'react'
import Event from './Event'

function Theatres({ theatre }) {
    return (
        <Box>
            <div className="results-container">
                {theatre.map((data) => {
                    return <Event data={data} />
                })}
            </div>
        </Box>
    )
}

export default Theatres
