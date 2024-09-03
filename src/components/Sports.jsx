import { Box } from '@mui/material'
import React from 'react'
import Event from './Event'

function Sports({ sport }) {
    return (
        <Box>
            <div className="results-container">
                {sport.map((data) => {
                    return <Event data={data} />
                })}
            </div>
        </Box>
    )
}

export default Sports
