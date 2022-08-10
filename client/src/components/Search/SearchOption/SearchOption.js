import React from 'react'

import SearchOptionOption from './SearchOptionOption/SearchOptionOption'

import { Container } from './SearchOptionStyle'

const SearchOption = ({ title, options, optionOptionTitle }) => {

    return <Container>

        <h3>{title}</h3>
        {options.map((item) => {

            return <>

                <SearchOptionOption title2={optionOptionTitle} />

            </>

        })}

    </Container>

}

export default SearchOption