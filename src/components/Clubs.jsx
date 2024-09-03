import { Box, Typography } from '@mui/material'
import React from 'react'
import Event from './Event'

function Clubs({ club }) {
    return (
        <Box>
            <div className="results-container">
                {club.map((data) => {
                    return <Event data={data} />
                })}
            </div>
        </Box>
    )
}

export default Clubs
