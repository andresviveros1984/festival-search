import React from 'react'
import Event from './Event'
import { Box } from '@mui/material'

function Date({ date }) {
    return (
        <Box sx={{}}>
            <div className='results-container'>
                {date.map(data => {
                    return (
                        <Event data={data} />
                    )
                })}
            </div>
        </Box>
    )
}

export default Date