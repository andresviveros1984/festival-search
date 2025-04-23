import { Box } from '@mui/material'
import React from 'react'
import Event from './Event'

function Theatres({ theatre, favourites, setFavourites }) {
    return (
        <Box>
            <div className="results-container">
                {theatre.map((data, index) => {
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

export default Theatres
