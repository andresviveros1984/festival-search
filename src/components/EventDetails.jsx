import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY } from '../config'
import { getEventDetails } from '../services/api/eventDetails'
import { faN } from '@fortawesome/free-solid-svg-icons'

function EventDetails({ favourites, setFavourites }) {
    const { id } = useParams()
    const [eventDetails, setEventDetails] = useState([])
    const navigate = useNavigate()
    //build this component
    //create favourties list component
    //local storage- google
    //on click on favo icon save to local as array of objects
    // favourites page to display list

    //use this site for design of event details page https://www.royalalberthall.com/tickets/proms/bbc-proms-24/prom-54/

    function handleFavourites(favItem) {
        setFavourites([...favourites, favItem])
        // console.log('logging favourites from details comp', favItem)
        console.log(favourites)
    }

    useEffect(() => {
        if (id) {
            getEventDetails(id, setEventDetails)
        }
    }, [id])

    return (
        <Box>
            {/* {console.log(eventDetails.results)} */}
            <div>
                <button onClick={() => navigate('/favourites')}>
                    Favourites
                </button>
                <p>Event details page</p>
                <button onClick={() => handleFavourites(eventDetails.results)}>
                    add to favourites?
                </button>
            </div>
        </Box>
    )
}

export default EventDetails
