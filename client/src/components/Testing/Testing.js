import { React, useState } from 'react'

import { Container } from './TestingStyle'

import Navbar from '../Navbar/Navbar'

const Testing = () => {

    const [val, setVal] = useState({ first: "", second: "", third: "" })

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value

        console.log(name)

        setVal({ ...val, [name]: value })

    }

    return <Container>
        <Navbar bg={"black"} pfp={true} />
        <form action="submit">
            <input type="text" name='first' value={val.first} onChange={handleChange} />
            <input type="text" name='second' value={val.second} onChange={handleChange} />
            <input type="text" name='third' value={val.third} onChange={handleChange} />
        </form>
    </Container>
}

export default Testing