import { Box } from '@mui/material'
import React from 'react'
import Event from './Event'

function Sports({ sport, favourites, setFavourites }) {
    return (
        <Box>
            <div className="results-container">
                {sport.map((data) => {
                    return (
                        <Event
                            data={data}
                            favourites={favourites}
                            setFavourites={setFavourites}
                        />
                    )
                })}
            </div>
        </Box>
    )
}

export default Sports
