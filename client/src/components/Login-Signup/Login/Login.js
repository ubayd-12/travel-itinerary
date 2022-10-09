import React, { useState, useContext } from 'react'
import { useUser } from '../../../hooks/useUser'

import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import { Container, LoginSignupWithContainer } from '../DefaultStyle'

import Navbar from '../../Navbar/Navbar'

import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { GoLocation } from "react-icons/go";

const Login = () => {

    const { dispatch } = useUser()

    const [val, setVal] = useState({ username: "", password: "" })

    const [result, setResult] = useState("sign-in")

    const [err, setErr] = useState("")

    const navigate = useNavigate()

    const redirect = (url) => {

        navigate(url)

    }

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value

        setVal({ ...val, [name]: value })

    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            const res = await axios.post("/login", val)
            dispatch({ type: "login", payload: res.data })
            localStorage.setItem('user', JSON.stringify(res.data))
            redirect("/profile")
        } catch (err) {
            setResult(prevState => "fail")
            setErr(prevState => err.response.data.msg)
        }

    }

    if (result === "sign-in") {
        return <div>
            <Navbar bg={"black"} />
            <Container>
                <div className="login-signup-box">
                    <h2 className='login-signup-text'>Login to TravelFar</h2>
                    <LoginSignUpWith text={"Sign in with"} service={"Google"} logo={<AiOutlineGoogle />} />
                    <LoginSignUpWith text={"Sign in with"} service={"Facebook"} logo={<ImFacebook />} />
                    <form action="submit" onSubmit={handleSubmit}>
                        <div className="username-field">
                            <label htmlFor="">Username: </label>
                            <input name="username" type="username" placeholder="username" value={val.username} onChange={handleChange} />
                        </div>
                        <div className="password-field">
                            <label htmlFor="">Password: </label>
                            <input name="password" type="password" placeholder="password" value={val.password} onChange={handleChange} />
                        </div>
                        <Link style={{ textDecoration: 'none' }} to="/sign-up">
                            <h3 className='click-to-signup-login'>Click here to sign up</h3>
                        </Link>
                        <button type='submit' className='login-signup-button'>Login</button>
                    </form>
                </div>
                <div className="location">
                    <span><GoLocation />Cancun, Quinta Roo, MEX</span>
                </div>
            </Container>
        </div>
    }

    if (result === "fail") {

        return <div>
            <Navbar bg={"black"} />
            <Container>
                <div className="login-signup-box">
                    <h2 className='login-signup-text'>Login to TravelFar</h2>
                    <LoginSignUpWith text={"Sign in with"} service={"Google"} logo={<AiOutlineGoogle />} />
                    <LoginSignUpWith text={"Sign in with"} service={"Facebook"} logo={<ImFacebook />} />
                    <form action="submit" onSubmit={handleSubmit}>
                        <div className="username-field">
                            <label htmlFor="">Username: </label>
                            <input name="username" type="username" placeholder="username" value={val.username} onChange={handleChange} />
                        </div>
                        <div className="password-field">
                            <label htmlFor="">Password: </label>
                            <input name="password" type="password" placeholder="password" value={val.password} onChange={handleChange} />
                        </div>
                        <h6 className='error'>{err}</h6>
                        <Link style={{ textDecoration: 'none' }} to="/sign-up">
                            <h3 className='click-to-signup-login'>Click here to sign up</h3>
                        </Link>
                        <button type='submit' className='login-signup-button'>Login</button>
                    </form>
                </div>
                <div className="location">
                    <span><GoLocation />Cancun, Quinta Roo, MEX</span>
                </div>
            </Container>
        </div>

    }

}

const LoginSignUpWith = ({ text, service, logo }) => {

    return <LoginSignupWithContainer>

        <span className='text'>{text} {service}<span className='logo'>{logo}</span></span>

    </LoginSignupWithContainer>


}

export default Login