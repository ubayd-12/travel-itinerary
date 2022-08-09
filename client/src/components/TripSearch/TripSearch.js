import React from 'react'

import './TripSearch.css'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import Navbar from '../Navbar/Navbar'

const TripSearch = () => {
    return <div className='TripSearch'>

        <Navbar className="test" />
        <div className="search-content">
            <div className="left-sidebar">
                <form action="">
                    <section>
                        <label htmlFor="">People</label>
                        <button><AiOutlinePlus /></button>
                        <h4 className='value'>Adults</h4>
                        <button><AiOutlineMinus /></button>
                        <br />
                        <button><AiOutlinePlus /></button>
                        <h4 className='value'>Children</h4>
                        <button><AiOutlineMinus /></button>
                    </section>
                    <section>
                        <label htmlFor="">Rooms</label>
                        <button><AiOutlinePlus /></button>
                        <h4 className='value'>Value</h4>
                        <button><AiOutlineMinus /></button>
                    </section>
                    <section>
                        <label htmlFor="">Price Range</label>
                        <input type="number" placeholder='min price' />
                        <input type="number" placeholder='max price' />
                    </section>
                    <button>Apply</button>
                </form>
            </div>
            <div className="right-sidebar">
                <h1>Test</h1>
            </div>
        </div>


    </div>
}

export default TripSearch