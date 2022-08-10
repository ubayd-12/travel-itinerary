import React from 'react'

import Navbar from '../Navbar/Navbar'

import { Container, Main } from './SearchStyle'
import { AiOutlineSearch } from "react-icons/ai";

import SearchOption from './SearchOption/SearchOption';

const Search = () => {
    return <Container>
        <Navbar bg={"black"} />
        <Main>
            <div className="sidebar">
                <SearchOption title={"People"} options={[{ optionOptionTitle: "test1" }, { optionOptionTitle: "test2" }, { optionOptionTitle: "test3" }]} />
            </div>
            <div className="map">
                <form action="">
                    <input type="text" />
                    <button><AiOutlineSearch className='search-icon' /></button>
                </form>
            </div>
        </Main>
    </Container>
}

export default Search