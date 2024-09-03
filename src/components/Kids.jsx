import { Box } from '@mui/material'
import React from 'react'
import Event from './Event'

function Kids({ kids }) {
    return (
        <Box>
            <div className="results-container">
                {kids.map((kid) => {
                    return <Event data={kid} />
                })}
            </div>
        </Box>
    )
}

export default Kids
