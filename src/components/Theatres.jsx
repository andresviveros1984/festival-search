import { Box } from '@mui/material'
import React from 'react'
import Event from './Event'

function Theatres({ theatre, favourites, setFavourites }) {
    return (
        <Box>
            <div className="results-container">
                {theatre.map((data) => {
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

export default Theatres
