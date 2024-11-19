import { Box } from '@mui/material'
import React from 'react'
import Event from './Event'

function Kids({ kids, favourites, setFavourites }) {
    return (
        <Box>
            <div className="results-container">
                {kids.map((kid) => {
                    return (
                        <Event
                            data={kid}
                            favourites={favourites}
                            setFavourites={favourites}
                        />
                    )
                })}
            </div>
        </Box>
    )
}

export default Kids
