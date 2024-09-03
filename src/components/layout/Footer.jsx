import { Box, Typography } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '10%',
                backgroundColor: 'white',
                color: 'black',
                height: '200px',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid black',
            }}
        >
            <div>
                <Typography variant="h5">Contact Us</Typography>
            </div>
            <div
                className="social-media"
                style={{ display: 'flex', gap: '10px' }}
            >
                <SocialIcon url="https://www.instagram.com" />
                <SocialIcon url="https://www.facebook.com" />
                <SocialIcon url="https:/twitter/" />
            </div>
        </Box>
    )
}

export default Footer
