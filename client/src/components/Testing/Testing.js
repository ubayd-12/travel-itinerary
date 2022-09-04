import { React, useState } from 'react'

import { Container } from './TestingStyle'

import Navbar from '../Navbar/Navbar'

import axios from 'axios'

const Testing = () => {

    const testA = axios.create({
        baseURL: "http://localhost:8000",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    const [val, setVal] = useState("nulla")

    const getInfo = async () => {

        const res = await testA.post("/test")
        console.log(res.data.username)
        setVal(prevState => res.data.username)

    }

    return <Container>
        <Navbar bg={"black"} pfp={true} />
        <div>
            <h3>{val}</h3>
            <button onClick={getInfo}>Get the info</button>
        </div>
    </Container>
}

export default Testing