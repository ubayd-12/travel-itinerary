import React from 'react'

import SearchOptionOption from './SearchOptionOption/SearchOptionOption'

import { Container, Value, Button } from './SearchOptionStyle'

const SearchOption = ({ title, options }) => {

    return <Container>
        <section className="">
            <h3>{title}</h3>
            {options ? (options.map((option) => {

                return <>

                    <SearchOptionOption title={option.title} />

                </>

            })) : (
                <form action="">
                    <Button>+</Button>
                    <Value>1</Value>
                    <Button>-</Button>
                </form>
            )}
        </section>

    </Container>

}

export default SearchOption