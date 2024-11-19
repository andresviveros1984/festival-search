import { Box, Button } from '@mui/material'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import styledComp from 'styled-components'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const theme = createTheme({
    palette: {
        ochre: {
            main: '#f48fb1',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
        },
    },
})

export default function Event({ data, favourites, setFavourites }) {
    const navigate = useNavigate()
    const [color, setColor] = React.useState('')
    function handleFavourites(favItem) {
        setFavourites([...favourites, favItem])
        console.log('logging favourites from details comp', favItem)
        //navigate('/favourites')
        // setColor(ochre.main)
    }

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    sx={{
                        height: '70px',
                    }}
                    title={
                        <div
                            style={{
                                fontSize: '20px',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                width: '200px',
                            }}
                        >
                            {data.eventname}
                        </div>
                    }
                    subheader={'On ' + data.date}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={data.xlargeimageurl}
                    alt=""
                />

                <CardActions disableSpacing>
                    <IconButton
                        aria-label="add to favorites"
                        onClick={() => handleFavourites(data)}
                    >
                        <FavoriteIcon color={color} />
                    </IconButton>
                    <StyledLInk to={`/event/${data.id}`}>
                        <Button size="small">Learn More</Button>
                    </StyledLInk>
                    <StyledLInk to={`/event/cart`}>
                        <Button size="small">Add To Cart</Button>
                    </StyledLInk>
                </CardActions>
                <Collapse timeout="auto" unmountOnExit></Collapse>
            </Card>
        </ThemeProvider>
    )
}

const StyledLInk = styled(Link)`
    border: 1px solid red;
    margin: 1px;
`
