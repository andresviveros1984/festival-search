import React from 'react'
import Event from './Event'
import { Box } from '@mui/material'

function Date({ date, favourites, setFavourites }) {
    return (
        <Box sx={{}}>
            <div className='results-container'>
                {date.map((data, index) => {
                    return (
                        <Event key={index}
                            data={data}
                            favourites={favourites}
                            setFavourites={setFavourites} />
                    )
                })}
            </div>
        </Box>
    )
}

export default Date