import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
import { Nav } from './NavbarStyle'
import { useUser } from '../../hooks/useUser'
import { useLogout } from '../../hooks/useLogout'

import NavbarOption from './NavbarOption/NavbarOption'
import ProfilePic from '../Profile/ProfilePic/ProfilePic'

const Navbar = ({ bg, pfp }) => {

    const { user, dispatch } = useUser()

    return <Nav bg={bg}>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div className="options">
            <NavbarOption title={"English"} />
            <Link to="/maps">
                <NavbarOption title={"Map"} />
            </Link>
            <NavbarOption title={"Support"} />
            {/* {pfp ? <ProfilePic size={"60px"} border={"0.5px white solid"} /> : undefined} */}
            {user && <Link to="/profile"><ProfilePic size={"60px"} border={"0.5px white solid"} /></Link>}
            {user ? <Link to='/'>
                <button onClick={() => { dispatch({ type: "logout" }); localStorage.removeItem('user'); }}>Log out</button>
            </Link> : <Link to='/sign-in'>
                <button>Sign in</button>
            </Link>}


        </div>

    </Nav>
}

export default Navbar