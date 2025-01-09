import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Clubs from './components/Clubs';
import Date from './components/Date';
import Kids from './components/Kids';
import Sports from './components/Sports';
import Theatres from './components/Theatres';
import Home from './components/Home';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import EventDetails from './components/EventDetails';
import { getEvent } from './services/api/events';
import Favourites from './components/Favourites';
import Cart from './components/Cart';


function App() {
  const location = useLocation()
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState([]);


  useEffect(() => {
    if (location.pathname.includes('event') || location.pathname.includes('favourites')) {
      return
    } else {
      getEvent(location, setData);
    }


  }, [location.pathname])


  useEffect(() => {
    const localFavourites = localStorage.getItem('favourites')
    console.log(typeof localFavourites, "checking local favourites")
    setFavourites(JSON.parse(localFavourites))
  }, [])


  //define api call here and
  return (
    <div className="App">

      <Layout data={data} setData={setData}>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='date' element={<Date date={data} favourites={favourites} setFavourites={setFavourites} />} />
          <Route path='club' element={<Clubs club={data} favourites={favourites} setFavourites={setFavourites} />} />
          <Route path='kids' element={<Kids kids={data} favourites={favourites} setFavourites={setFavourites} />} />
          <Route path='sport' element={<Sports sport={data} favourites={favourites} setFavourites={setFavourites} />} />
          <Route path='theatre' element={<Theatres theatre={data} favourites={favourites} setFavourites={setFavourites} />} />
          <Route path='/event/:id' element={<EventDetails favourites={favourites} setFavourites={setFavourites} />} />
          <Route path='/event/cart' element={<Cart />} />
          <Route path='/favourites' element={<Favourites favourites={favourites} setFavourites={setFavourites} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
