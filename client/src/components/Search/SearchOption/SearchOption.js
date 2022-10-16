import React from 'react'

import SearchOptionOption from './SearchOptionOption/SearchOptionOption'

import { Container, Value, Button } from './SearchOptionStyle'

const SearchOption = ({ setter, getter, title, options, values }) => {
    return <Container>

        <section className="">
            <h3>{title}</h3>
            {options ? (options.map((option, index) => {
                return <>

                    <SearchOptionOption mainTitle={title} setter={setter} getter={getter} values={values} key={index} title={option.title} />

                </>

            })) : (<>
                {/** title.toLowerCase() */}
                <Button onClick={() => setter({ ...getter, [title.toLowerCase()]: getter[title.toLowerCase()] + 1 })} >+</Button>
                <Value>{values}</Value>
                {getter[title.toLowerCase()] > 0 ? (
                    <Button onClick={() => setter({ ...getter, [title.toLowerCase()]: getter[title.toLowerCase()] - 1 })}>-</Button>
                ) : (
                    <Button>-</Button>
                )}

            </>
            )}
        </section>

    </Container >

}

export default SearchOption