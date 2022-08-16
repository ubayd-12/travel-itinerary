import './App.css';

import { Route, Routes } from 'react-router-dom'

import Homepage from './components/Homepage/Homepage'

// import Testing from './components/Testing/Testing'

import Login from './components/Login-Signup/Login/Login';

import Signup from './components/Login-Signup/Signup/Signup';

import ProfilePage from './components/Profile/ProfilePage'

function App() {
  return <div className='App'>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/sign-in' element={<Login />}></Route>
      <Route path='/sign-up' element={<Signup />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
    </Routes>
  </div>;
}

export default App;
