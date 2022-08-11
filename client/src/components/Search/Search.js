import React from 'react'

import Navbar from '../Navbar/Navbar'

import { Container, Main } from './SearchStyle'
import { AiOutlineSearch } from "react-icons/ai";

import SearchOption from './SearchOption/SearchOption';

const Search = () => {
    return <Container>
        <Navbar bg={"black"} />
        <Main className='Main'>
            <div className="sidebar">
                <SearchOption className="SearchOption" title="People" options={[{ title: "Adults" }, { title: "Children" }]} />
                <SearchOption className="SearchOption" title="Rooms" />
                <SearchOption className="SearchOption" title="Beds" />
                <SearchOption className="SearchOption" title="Pets" />
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