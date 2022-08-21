import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Search from './components/Search/Search'
import Login from './components/Login-Signup/Login/Login';
import Signup from './components/Login-Signup/Signup/Signup';
import ProfilePage from './components/Profile/ProfilePage'
import React, { useState } from 'react';
import { UserContext } from './UserContext';

function App() {

  const [user, setUser] = useState(null)

  console.log(user)

  return <div className='App'>
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/sign-in' element={<Login />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/maps' element={<Search />}></Route>
      </Routes>
    </UserContext.Provider>
  </div>;
}

export default App;
