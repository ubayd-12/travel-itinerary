import React, { useState, useEffect } from 'react'

import Navbar from '../Navbar/Navbar'

import axios from 'axios';

import filterArr, { filterArrNum } from '../../functions/filterArr';

import { Container, Grid, Search, Intro } from './HomepageStyle'
import { GoLocation } from "react-icons/go";
import { Navigate, useNavigate, Link } from 'react-router-dom';


const Homepage = () => {

    const getCities = async () => {

        const { data } = await axios.get('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')

        setCities(prevState => filterArrNum(50, data, "rank"))

    }

    useEffect(() => {

        getCities()

    }, [])

    const naviagte = useNavigate()

    const [cities, setCities] = useState([])

    const [autoComplete, setAutoComplete] = useState([])

    const [tempSearch, setTempSearch] = useState("")

    const handleChange = (e) => {
        //arr.slice(0, 3)
        setTempSearch(prevState => e.target.value)
        setAutoComplete(prevState => {
            const temp = cities.filter((city) => {
                let temp = 0;
                for (let i = 0; i < e.target.value.length; i++) {
                    if (city.city[i] === e.target.value[i]) {
                        temp++;
                    }
                }
                return temp === e.target.value.length
            })
            return temp.slice(0, 5)
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

    }

    return <Container>
        <Navbar />
        <Grid>
            <Search>
                <form onSubmit={handleSubmit} action="">
                    <input type="text" name='city' placeholder='Where will your next trip be?' value={tempSearch} onChange={handleChange} />

                    <Link to='/maps' state={{ hpCity: tempSearch }}><button type="submit">Go</button></Link>

                    <div className="cities">
                        <ul>
                            {(autoComplete && tempSearch) && <div className="options">
                                <ul>
                                    {autoComplete.map((city) => {
                                        return <li onClick={() => { setTempSearch(city.city); setAutoComplete([]); }}>{city.city}</li>
                                    })}
                                </ul>
                            </div>}
                        </ul>
                    </div>
                </form>

            </Search>
            <Intro>
                <p>“Once a year, go someplace you’ve never been before.” <br></br> -CEO Ubayd Sharif"</p>
                <span><GoLocation />Cancun, Quinta Roo, MEX</span>
            </Intro>
        </Grid>
    </Container>
}

export default Homepage