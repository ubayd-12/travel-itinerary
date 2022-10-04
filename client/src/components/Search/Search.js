import { React, useState } from 'react'

import axios from 'axios'

import Map, { Marker, NavigationControl } from 'react-map-gl';

import Navbar from '../Navbar/Navbar'

import { Container, Main } from './SearchStyle'
import { AiOutlineSearch } from "react-icons/ai";

import SearchOption from './SearchOption/SearchOption';

import { MdHotel } from "react-icons/md";

const aFetch = async (url) => {

    const res = await fetch(url)
    return await res.json()

}

const data = aFetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")

console.log(data)

const Search = () => {

    // const [loading, setLoading] = useState(true)

    // const [error, setError] = useState(false)

    // const verify = async () => {

    //     try {
    //         const res = await axios.get("http://localhost:8000/protected", { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlwiNjJmOWI5Njk3NDkzYTQ5ZDFhNTg4ZGVhXCIiLCJpYXQiOjE2NjIyNDk3OTksImV4cCI6MTY2MjI1MzM5OX0.W8LQfybBeV5_fZ5VxLcwYTC6alEompWXzYPZrMJue08` } })
    //         console.log(res.data)
    //         setLoading(prevState => false)
    //     } catch (err) {
    //         setError(prevState => true)
    //     }

    // }

    // verify()

    // if (loading && error) return <Container>
    //     <Navbar bg={"black"} />
    //     <h1>Error</h1>
    // </Container>

    // if (loading) return <Container>
    //     <Navbar bg={"black"} />
    //     <h1>Loading</h1>
    // </Container>
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