import React from 'react'

import { Container, Title, Value, Button } from './SearchOptionOptionStyle'

const SearchOptionOption = ({ title }) => {
    return <Container>
        <h6>{title}</h6>
        <form action="">
            <Button>+</Button>
            <Value>1</Value>
            <Button>-</Button>
        </form>


    </Container>
}

export default SearchOptionOption