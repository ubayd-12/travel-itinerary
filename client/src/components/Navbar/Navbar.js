import React from 'react'

import logo from './Images/logo.png'

import { Nav } from './NavbarStyle'

const Navbar = ({ bg }) => {
    return <Nav bg={bg}>
        <img src={logo} alt="" />
        <button>Sign up</button>
    </Nav>
}

export default Navbar