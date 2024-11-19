import React from 'react'
import Event from './Event'
import { Box } from '@mui/material'

function Date({ date, favourites, setFavourites }) {
    return (
        <Box sx={{}}>
            <div className='results-container'>
                {date.map(data => {
                    return (
                        <Event data={data} favourites={favourites} setFavourites={setFavourites} />
                    )
                })}
            </div>
        </Box>
    )
}

export default Date