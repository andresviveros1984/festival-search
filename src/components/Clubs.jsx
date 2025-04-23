import { Box, Typography } from '@mui/material'
import React from 'react'
import Event from './Event'

function Clubs({ club, favourites, setFavourites }) {
    return (
        <Box>
            <div className="results-container">
                {club.map((data, index) => {
                    return (
                        <Event
                            key={index}
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

export default Clubs
