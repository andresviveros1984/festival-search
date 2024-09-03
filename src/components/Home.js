import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Home({ data, getSingleEvent }) {
    const [image, setImage] = useState('');

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
            <ImageList sx={{ width: 800, height: 550 }} cols={5} rowHeight={164}>
                {data.map((festivalImage) => (
                    <ImageListItem key={festivalImage.largeimageurl}>
                        <img className='home-images'
                            style={{ borderRadius: '10px' }}
                            srcSet={`${festivalImage.largeimageurl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={festivalImage.largeimageurl}
                            alt={festivalImage.eventname}
                            loading="lazy"
                            onClick={() => console.log("i have been clicked " + festivalImage.id)}
                            // onClick={() => getSingleEvent(festivalImage.id)}
                            onClick={() => setImage(festivalImage.xlargeimageurl
                            )}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <div className='on-top-image' onClick={() => setImage('')}>
                <img src={image} />
            </div>
        </Box >
    )
}

export default Home