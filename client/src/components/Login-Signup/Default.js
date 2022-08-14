import React from 'react'

import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'

import { Container, LoginSignupWithContainer } from './DefaultStyle'

import { AiOutlineGoogle } from "react-icons/ai";

import { ImFacebook } from "react-icons/im";

import { GoLocation } from "react-icons/go";

const Default = ({ LorS, fields }) => {
    return <div>
        <Navbar bg={"black"} />
        <Container>
            <div className="login-signup-box">
                <h2 className='login-signup-text'>{LorS === "L" ? "Login" : "Sign up"} to TravelFar</h2>
                <LoginSignUpWith text={"Sign in with"} service={"Google"} logo={<AiOutlineGoogle />} />
                <LoginSignUpWith text={"Sign in with"} service={"Facebook"} logo={<ImFacebook />} />
                <form action="">
                    {fields.map((field) => {

                        return <FormFields nameOfClass={field.nameOfClass} labelName={field.labelName} inputType={field.inputType} placeholderName={field.placeholderName} />

                    })}
                    <Link style={{ textDecoration: 'none' }} to={LorS === "L" ? "/sign-up" : "/sign-in"}>
                        <h3 className='click-to-signup-login'>Click here to {LorS === "L" ? "Sign up" : "Log in"}</h3>
                    </Link>
                    <button className='login-signup-button'>{LorS === "L" ? "Login" : "Sign up"}</button>
                </form>
            </div>
            <div className="location">
                <span><GoLocation />Cancun, Quinta Roo, MEX</span>
            </div>
        </Container>
    </div>
}

const LoginSignUpWith = ({ text, service, logo }) => {

    return <LoginSignupWithContainer>

        <span className='text'>{text} {service}<span className='logo'>{logo}</span></span>

    </LoginSignupWithContainer>


}

const FormFields = ({ nameOfClass, labelName, inputType, placeholderName }) => {


    return <div className={nameOfClass}>
        <label htmlFor="">{labelName}</label>
        <input type={inputType} placeholder={placeholderName} />
    </div>

}

export default Default