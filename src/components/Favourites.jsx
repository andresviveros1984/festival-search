import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

export default function Favourites({ favourites }) {
    const [localFavourites, setLocalFavourites] = useState()

    // list favourties,
    //for each one have a botton that will nagivate to the event for booking/checkout
    return (
        <div className="favourites-container">
            {console.log('favourites', favourites)}
            {favourites.map((favItem) => {
                return (
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={favItem.imageurl}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={favItem.eventname}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{
                                                color: 'text.primary',
                                                display: 'inline',
                                            }}
                                        >
                                            {favItem.venue.cityname}
                                        </Typography>

                                        {favItem.description}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                        <Divider variant="inset" component="li" />
                    </List>
                )
            })}
        </div>
    )
}
