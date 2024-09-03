import React, { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { EVENT_TYPES } from '../../constants'
import useStore from '../../store'
import { getEventByKeyWord } from '../../services/api/keyword'
import axios from 'axios'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

const Header = ({ data, setData }) => {
    const [input, setInput] = useState('')

    useEffect(() => {
        getEventByKeyWord(input, setData)
    }, [input])

    const Search = styled('div')(({ theme }) => ({
        border: '1px solid black',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }))

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }))

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }))

    return (
        <div className="header">
            <AppBar
                position="static"
                style={{
                    textAlign: 'center',
                    backgroundColor: 'white',
                    color: 'black',
                }}
            >
                <Toolbar className="container">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <HomeLink to={'/'}>
                        <Typography
                            variant="p"
                            noWrap
                            component="div"
                            sx={{
                                textAlign: 'left',
                                fontSize: '30px',
                                display: { xs: 'none', sm: 'block' },
                            }}
                        >
                            Festival Search
                        </Typography>
                    </HomeLink>
                    <div className="navigation">
                        {EVENT_TYPES.map((event, index) => (
                            <Link
                                to={event.name.toLowerCase()}
                                style={{ textDecoration: 'none' }}
                                key={index}
                            >
                                <div key={event.id} className="nav-link">
                                    {event.name}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <TextField
                        placeholder="Search Events…"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        // inputProps={{ 'aria-label': 'Search events' }}
                        // onChange={(e) => getEventByKeyWord(e, setData)}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

const HomeLink = styled(Link)`
    text-decoration: none;
    color: black;
`
