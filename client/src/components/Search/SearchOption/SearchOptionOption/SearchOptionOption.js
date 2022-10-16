import React from 'react'

import { Container, Title, Value, Button } from './SearchOptionOptionStyle'

const SearchOptionOption = ({ mainTitle, setter, getter, values, title }) => {
    const headTitle = mainTitle.toLowerCase()
    const secTitle = title.toLowerCase()
    return <Container>
        <h6>{title}</h6>
        <>
            <Button onClick={() => setter({ ...getter, [headTitle]: { ...getter[headTitle], [secTitle]: getter[headTitle][secTitle] + 1 } })}>+</Button>
            <Value>{values[title.toLowerCase()]}</Value>
            {getter[headTitle][secTitle] > 0 ? (
                <Button onClick={() => setter({ ...getter, [headTitle]: { ...getter[headTitle], [secTitle]: getter[headTitle][secTitle] - 1 } })}>-</Button>
            ) : (
                <Button>-</Button>
            )}


        </>


    </Container>
}

export default SearchOptionOption