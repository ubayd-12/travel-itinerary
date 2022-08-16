import { React, useState } from 'react'

import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import { Container, LoginSignupWithContainer } from '../DefaultStyle'

import Navbar from '../../Navbar/Navbar'

import { AiOutlineGoogle } from "react-icons/ai";

import { ImFacebook } from "react-icons/im";

import { GoLocation } from "react-icons/go";

const Signup = () => {

    const [val, setVal] = useState({ firstName: "", lastName: "", dob: "", username: "", password: "", confirmPassword: "" })

    const [result, setResult] = useState("signup")

    const [err, setErr] = useState("")

    const navigate = useNavigate()

    const redirect = (url) => {


        setTimeout(() => {
            navigate(url)
        }, 5000)

    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            await register.post("/register", val)
            setResult(prevState => "success")
            redirect("/sign-in")
        } catch (err) {
            setResult(prevState => "fail")
            setErr(err.response.data.msg)
        }
    }

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value

        setVal({ ...val, [name]: value })

    }

    const register = axios.create({
        baseURL: "http://localhost:8000"
    })

    if (result === "signup") {

        return <div>
            <Navbar bg={"black"} />
            <Container>
                <div className="login-signup-box">
                    <h2 className='login-signup-text'>Signup to TravelFar</h2>
                    <LoginSignUpWith text={"Sign in with"} service={"Google"} logo={<AiOutlineGoogle />} />
                    <LoginSignUpWith text={"Sign in with"} service={"Facebook"} logo={<ImFacebook />} />
                    <form action="submit" onSubmit={handleSubmit}>
                        <div className="first-name-field">
                            <label htmlFor="">First name: </label>
                            <input name="firstName" type="text" placeholder="username" value={val.firstName} onChange={handleChange} />
                        </div>
                        <div className="last-name-field">
                            <label htmlFor="">Last name: </label>
                            <input name="lastName" type="text" placeholder="last name" value={val.lastName} onChange={handleChange} />
                        </div>
                        <div className="dob-field">
                            <label htmlFor="">Date of birth: </label>
                            <input name="dob" type="text" placeholder="Date of birth" value={val.dob} onChange={handleChange} />
                        </div>
                        <div className="username-field">
                            <label htmlFor="">Username: </label>
                            <input name="username" type="username" placeholder="Username" value={val.username} onChange={handleChange} />
                        </div>
                        <div className="password-field">
                            <label htmlFor="">Password: </label>
                            <input name="password" type="password" placeholder="Password" value={val.password} onChange={handleChange} />
                        </div>
                        <div className="confirm-password-field">
                            <label htmlFor="">Confirm password: </label>
                            <input name="confirmPassword" type="password" placeholder="Confrim password" value={val.confirmPassword} onChange={handleChange} />
                        </div>
                        <Link style={{ textDecoration: 'none' }} to="/sign-in">
                            <h3 className='click-to-signup-login'>Click here to log in</h3>
                        </Link>
                        <button type='submit' className='login-signup-button'>Signup</button>
                    </form>
                </div>
                <div className="location">
                    <span><GoLocation />Cancun, Quinta Roo, MEX</span>
                </div>
            </Container>
        </div>
    }

    if (result === "success") {

        return <div>
            <Navbar bg={"black"} />
            <Container>
                <div className="login-signup-box">
                    <h2 className="success-intro">You have succesfully signed up!</h2>
                    <h2 className="success-family">Welcome to the #DreamTeam! The #TravelFar family!</h2>
                    <h4 className="success-login">In 5 seconds you will be redirected to the login page to begin your journeys...</h4>
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
                    <h2 className='login-signup-text'>Signup to TravelFar</h2>
                    <LoginSignUpWith text={"Sign in with"} service={"Google"} logo={<AiOutlineGoogle />} />
                    <LoginSignUpWith text={"Sign in with"} service={"Facebook"} logo={<ImFacebook />} />
                    <form action="submit" onSubmit={handleSubmit}>
                        <div className="first-name-field">
                            <label htmlFor="">First name: </label>
                            <input name="firstName" type="text" placeholder="username" value={val.firstName} onChange={handleChange} />
                        </div>
                        <div className="last-name-field">
                            <label htmlFor="">Last name: </label>
                            <input name="lastName" type="text" placeholder="last name" value={val.lastName} onChange={handleChange} />
                        </div>
                        <div className="dob-field">
                            <label htmlFor="">Date of birth: </label>
                            <input name="dob" type="text" placeholder="Date of birth" value={val.dob} onChange={handleChange} />
                        </div>
                        <div className="username-field">
                            <label htmlFor="">Username: </label>
                            <input name="username" type="username" placeholder="Username" value={val.username} onChange={handleChange} />
                        </div>
                        <div className="password-field">
                            <label htmlFor="">Password: </label>
                            <input name="password" type="password" placeholder="Password" value={val.password} onChange={handleChange} />
                        </div>
                        <div className="confirm-password-field">
                            <label htmlFor="">Confirm password: </label>
                            <input name="confirmPassword" type="password" placeholder="Confrim password" value={val.confirmPassword} onChange={handleChange} />
                        </div>
                        <h6 className='error'>{err}</h6>
                        <Link style={{ textDecoration: 'none' }} to="/sign-in">
                            <h3 className='click-to-signup-login'>Click here to log in</h3>
                        </Link>

                        <button type='submit' className='login-signup-button'>Signup</button>
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

export default Signup