import './App.css';

import { Route, Routes } from 'react-router-dom'

import Homepage from './components/Homepage/Homepage'

import Default from './components/Login-Signup/Default'

function App() {
  return <div className='App'>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/sign-in' element={<Default LorS={"L"} fields={[{ nameOfClass: "username-field", labelName: "Username", inputType: "username", placeholderName: "Username" }, { nameOfClass: "password-field", labelName: "Password", inputType: "password", placeholderName: "Password" }]} />}></Route>
      <Route path='/sign-up' element={<Default LorS={"S"} fields={[{ nameOfClass: "first-name-field", labelName: "First name", inputType: "name", placeholderName: "First name" }, { nameOfClass: "last-name-field", labelName: "Last name", inputType: "name", placeholderName: "Last name" }, { nameOfClass: "dob-field", labelName: "Date of birth", inputType: "number", placeholderName: "Date of birth" }, { nameOfClass: "username-field", labelName: "Username", inputType: "username", placeholderName: "Username" }, { nameOfClass: "password-field", labelName: "Password", inputType: "password", placeholderName: "Password" }, { nameOfClass: "confirm-password-field", labelName: "Confirm Password", inputType: "password", placeholderName: "Confirm Password" }]} />}></Route>
    </Routes>
  </div>;
}

export default App;
