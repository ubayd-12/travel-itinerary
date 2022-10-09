import React from 'react'

import Navbar from '../Navbar/Navbar'

import { Container, Grid, Search, Intro } from './HomepageStyle'
import { GoLocation } from "react-icons/go";

const Homepage = () => {
    return <Container>
        <Navbar />
        <Grid>
            <Search>
                <form action="">
                    <input type="text" placeholder='Where will your next trip be?' />
                    <button>Go</button>
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