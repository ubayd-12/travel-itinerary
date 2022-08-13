import React from 'react'

import logo from './Images/logo.png'

import { Nav } from './NavbarStyle'

import NavbarOption from './NavbarOption/NavbarOption'
import ProfilePic from '../Profile/ProfilePic/ProfilePic'

const Navbar = ({ bg }) => {
    return <Nav bg={bg}>
        <img src={logo} alt="" />
        <div className="options">
            <NavbarOption title={"English"} />
            <NavbarOption title={"Trips"} />
            <NavbarOption title={"Support"} />
            <ProfilePic size={"60px"} border={"0.5px white solid"} />
            <button>Sign out</button>
        </div>

    </Nav>
}

export default Navbar