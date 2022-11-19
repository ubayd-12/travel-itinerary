import React, { useEffect, useState } from 'react';
import { useUser } from './hooks/useUser';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Search from './components/Search/Search'
import Login from './components/Login-Signup/Login/Login';
import Signup from './components/Login-Signup/Signup/Signup';
import ProfilePage from './components/Profile/ProfilePage'
import Testing from './components/Testing/Testing';
import CreateHotel from './components/Admin/Hotels/CreateHotel/CreateHotel';
import GetHotels from './components/Admin/Hotels/GetHotels/GetHotels';
import Payment from './components/Payment/Payment';
import Checkout from './components/Checkout/Checkout'
import Confirmation from './components/Checkout/Confirmation/Confirmation';

function App() {

  const { dispatch } = useUser()

  useEffect(() => {

    const userData = JSON.parse(localStorage.getItem("user"))

    dispatch({ type: "login", payload: userData })

  }, [])

  return <div className='App'>

    <Routes>
      <Route path='/sign-in' element={<Login />}></Route>
      <Route path='/sign-up' element={<Signup />}></Route>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='/maps' element={<Search />}></Route>
      <Route path='/testing' element={<Testing />}></Route>
      <Route path='/admin/create-hotel' element={<CreateHotel />}></Route>
      <Route path='/admin/get-hotels' element={<GetHotels />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/confirmation' element={<Confirmation />}></Route>
    </Routes>
  </div>;
}

export default App;
