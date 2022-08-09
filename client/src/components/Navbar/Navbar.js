import React from 'react'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {
    return <div className='top'>
        <img className='logo' src={logo} alt="" />
        <button className='btn-signup btn-hp-hover'>Sign up</button>
    </div>
}

export default Navbar