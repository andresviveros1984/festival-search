import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY } from '../config'
import { getEventDetails } from '../services/api/eventDetails'

function EventDetails({ favourites, setFavourites }) {
    const { id } = useParams()
    const [eventDetails, setEventDetails] = useState({ results: null })
    const navigate = useNavigate()
    //build this component
    //create favourties list component
    //local storage- google
    //on click on favo icon save to local as array of objects
    // favourites page to display as list

    //use this site for design of event details page https://www.royalalberthall.com/tickets/proms/bbc-proms-24/prom-54/

    function handleFavourites(favItem) {
        setFavourites([...favourites, favItem])
        // console.log('logging favourites from details comp', favItem)
    }
    useEffect(() => {
        if (id) {
            getEventDetails(id, setEventDetails)
        }
    }, [id])

    if (eventDetails.results === null) {
        return 'LOADING...'
        //add material ui and replace loading
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div className="heading">
                <Typography
                    variant="h1"
                    color="initial"
                    sx={{
                        border: '1px solid blue',
                        fontSize: '40px',
                    }}
                >
                    {eventDetails.results.eventname}
                </Typography>
            </div>
            <div className="event-date-times">
                <Typography
                    variant="h2"
                    color="initial"
                    sx={{
                        fontSize: '30px',
                    }}
                >
                    Saturday 2 September 2024
                    {eventDetails.results.date}
                </Typography>
                <Typography
                    variant="h3"
                    color="initial"
                    sx={{ textAlign: 'center' }}
                >
                    Starts: 23:00
                </Typography>
            </div>
            <div className="event-image">
                <img src={eventDetails.results.largeimageurl} alt="" />
            </div>
            <div>
                <button onClick={() => navigate('/favourites')}>
                    Favourites
                </button>

                <button onClick={() => handleFavourites(eventDetails.results)}>
                    add to favourites?
                </button>
            </div>
        </Box>
    )
}

export default EventDetails
