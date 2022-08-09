import React from 'react'

import './Homepage.css'

import { GoLocation } from "react-icons/go";
import Navbar from '../Navbar/Navbar';

const Homepage = () => {
    return <>

        <div className='container'>
            <div className='hp'>
                <Navbar />
                <div className="middle">
                    <form action="">
                        <input type="text" placeholder='Where will your next trip be?' />
                        <button>Go</button>
                    </form>
                </div>
                <div className="bottom">
                    <p className='intro'>“Once a year, go someplace you’ve never been before.” <br></br> -Ubayd Sharif</p>
                    <span className='location-span'><GoLocation /><br></br> Canmore,<br></br> AB, Canada</span>
                </div>

            </div>
        </div>

    </>
}

export default Homepage