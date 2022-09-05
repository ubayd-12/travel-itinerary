import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import logo from './Images/logo.png'

import { Nav } from './NavbarStyle'

import NavbarOption from './NavbarOption/NavbarOption'
import ProfilePic from '../Profile/ProfilePic/ProfilePic'

const Navbar = ({ bg, pfp }) => {

    return <Nav bg={bg}>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div className="options">
            <NavbarOption title={"English"} />
            <Link to="/maps">
                <NavbarOption title={"Trips"} />
            </Link>
            <NavbarOption title={"Support"} />
            {pfp ? <ProfilePic size={"60px"} border={"0.5px white solid"} /> : undefined}
            <Link to='/'>
                <button>Sign out</button>
            </Link>

        </div>

    </Nav>
}

export default Navbar