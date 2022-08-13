import { React, useRef, useState, useEffect } from 'react'

import Map, { Marker, NavigationControl } from 'react-map-gl';

import Navbar from '../Navbar/Navbar'

import { Container, Main } from './SearchStyle'
import { AiOutlineSearch } from "react-icons/ai";

import SearchOption from './SearchOption/SearchOption';

import { MdHotel } from "react-icons/md";

const aFetch = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    return data

}

const data = aFetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")

console.log(data)

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
                <div className="map-container">

                    <Map
                        initialViewState={{
                            longitude: -93.2650,
                            latitude: 44.9778,
                            zoom: 11
                        }}
                        mapStyle="mapbox://styles/ubayd-12/cl6o5poqd004b16pkyz56fmsz"
                        mapboxAccessToken="pk.eyJ1IjoidWJheWQtMTIiLCJhIjoiY2w2bzVoaGY2MDI1ajNrdGVycjF5ZW40ayJ9.DMFtkRcqlTGpfYo0Un2DHA"
                    >
                        <NavigationControl className="map-control" />
                        <Marker longitude={-93.2650} latitude={44.9778} anchor="bottom" >
                            <MdHotel className='hotel-pin' />
                        </Marker>
                        <Marker longitude={-76} latitude={37} anchor="bottom" >
                            <MdHotel className='hotel-pin' />
                        </Marker>
                    </Map>
                </div>
                <form action="">
                    <input type="text" />
                    <button><AiOutlineSearch className='search-icon' /></button>
                </form>
            </div>
        </Main>
    </Container>
}

export default Search