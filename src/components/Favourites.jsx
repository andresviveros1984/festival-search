import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

export default function Favourites({ favourites }) {
    const [localFavourites, setLocalFavourites] = useState()

    // list favourties,
    //for each one have a botton that will nagivate to the event for booking/checkout
    return (
        <div>
            {console.log('favourites', favourites)}
            <Typography variant="h1" color="initial">
                {/* {favourites} */}
            </Typography>
            <p>fav</p>
        </div>
    )
}
