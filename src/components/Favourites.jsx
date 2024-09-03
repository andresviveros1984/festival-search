import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

export default function Favourites({ favourites }) {
    const [localFavourites, setLocalFavourites] = useState()

    useEffect(() => {
        setLocalFavourites(favourites)
    }, [favourites])

    return (
        <div>
            {console.log('favourites', favourites)}
            <Typography variant="h1" color="initial">
                {favourites}
            </Typography>
            <p>fav</p>
        </div>
    )
}
