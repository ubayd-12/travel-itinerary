import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Container } from './ConfirmationStyle'

import { useNavigate } from 'react-router-dom'

const Confirmation = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }
    return <>
        <Navbar bg={"black"} />
        <Container>
            <div className='msg'>
                <h2 className="success-email">We have set a confirmation email to you at <span className='email'>ubaydsharif17@gmail.com</span></h2>
                <h2 className="success-email">You have succesfully book your trip!</h2>
                <h2 className="success-family">Pack your bags!</h2>
                <h4 className="success-login">#TheCountDownStartsNow!</h4>
                <button onClick={routeChange} className='redirect'>Ready for your next trip?</button>
            </div>
        </Container>
    </>
}

export default Confirmation