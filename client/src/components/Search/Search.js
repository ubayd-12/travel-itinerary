import { React, useEffect, useReducer, useState } from 'react'

import axios from 'axios'

import firstFourNums from '../../functions/firstFourNum';
import filterArr from '../../functions/filterArr';
import { filterArrNum } from '../../functions/filterArr';

import Map, { Marker, NavigationControl } from 'react-map-gl';

import Navbar from '../Navbar/Navbar'

import { Container, Main } from './SearchStyle'
import { AiOutlineSearch } from "react-icons/ai";

import SearchOption from './SearchOption/SearchOption';

import { MdHotel } from "react-icons/md";


const Search = () => {

    const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

    const fetchCities = async () => {

        const res = await fetch(url)
        const data = await res.json()
        setCities(prevState => filterArrNum(50, data, "rank"))
        setSearch(filterArr("Boston", data, "city")[0])

    }

    const [search, setSearch] = useState({})

    const [cities, setCities] = useState([])

    const [tempSearch, setTempSearch] = useState("Boston")

    const [fields, setFields] = useState({
        people: { adults: 0, children: 0 },
        rooms: 0,
        beds: 0,
        pets: 0
    })

    useEffect(() => {

        fetchCities()

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();
    }

    const handleSubmit2 = (e) => {

        e.preventDefault();
        setSearch(filterArr(tempSearch, cities, "city")[0])

    }

    const handleChange = (e) => {

        setTempSearch(prevState => e.target.value)

    }

    return <Container>
        <Navbar bg={"black"} />
        <Main className='Main'>
            <form onSubmit={handleSubmit}>
                <div className="sidebar">
                    <SearchOption setter={setFields} getter={fields} values={fields.people} className="SearchOption" title="People" options={[{ title: "Adults" }, { title: "Children" }]} />
                    <SearchOption setter={setFields} getter={fields} values={fields.rooms} className="SearchOption" title="Rooms" />
                    <SearchOption setter={setFields} getter={fields} values={fields.beds} className="SearchOption" title="Beds" />
                    <SearchOption setter={setFields} getter={fields} values={fields.pets} className="SearchOption" title="Pets" />
                </div>
                <button type='submit'>Submit</button>
            </form>
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

                        viewState={search && {
                            longitude: firstFourNums(search.longitude),
                            latitude: firstFourNums(search.latitude),
                            zoom: 11
                        }}

                    >
                        <NavigationControl className="map-control" />
                        {cities && (cities.map((city) => {

                            const lon = firstFourNums(city.longitude)
                            const lat = firstFourNums(city.latitude)

                            return <Marker longitude={lon} latitude={lat} anchor="bottom" >
                                <MdHotel className='hotel-pin' />
                            </Marker>

                        }))}
                    </Map>
                </div>
                <form action="" onSubmit={handleSubmit2}>
                    <input type="text" name='city' value={tempSearch} onChange={handleChange} />
                    <button type='submit'><AiOutlineSearch className='search-icon' /></button>
                </form>
            </div>
        </Main>
    </Container>


}

export default Search