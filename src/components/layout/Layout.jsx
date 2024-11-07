import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import useStore from '../../store'

import { useLocation } from 'react-router-dom'
import Dialogue from '../Dialogue'

const Layout = ({ children, data, setData }) => {
    // const eventType = useStore((state) => state.eventType)
    // const events = useStore((state) => state.events)
    // const setEvents = useStore((state) => state.setEvents)

    return (
        <div>
            <Header data={data} setData={setData} />
            <div style={{ minHeight: '63vh' }}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
