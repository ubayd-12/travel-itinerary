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
    </Routes>
  </div>;
}

export default App;
