import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Container } from './GetHotelsStyle'

import { genNum } from '../../../../functions/NumArrayGen'

import { filterOnlyUnique, filterArrWOptions, filterArrWOptionsASpecs } from '../../../../functions/filterArr'

const GetHotels = () => {
    const [hotels, setHotels] = useState([])
    const [maxOptions, setMaxOptions] = useState({ maxBeds: 0, maxPeople: 0, cities: [] })
    const [options, setOptions] = useState({ beds: 1, people: 1, city: "" })
    const [filteredHotels, setFilteredHotels] = useState([])

    useEffect(() => {
        const getAllHotels = async () => {
            try {
                const { data } = await axios.get("/hotels")
                setHotels(prevState => data)
                setFilteredHotels(prevState => data)
                console.log(test)
            } catch (err) {
                return []
            }
        }
        getAllHotels()
    }, [])

    useEffect(() => {
        setMaxOptions({ ...maxOptions, cities: filterOnlyUnique(hotels, "city") })
        setOptions({ ...options, beds: genNum(maxOptions.maxPeople)[0], people: genNum(maxOptions.maxPeople)[0], city: maxOptions.cities[0] })
    }, [hotels])

    const handleChange = (e) => {
        const { value, name } = e.target
        if (e.target.name === "beds" || "people") {
            console.log(e.target.name, typeof (e.target.value))
        }
        setOptions({ ...options, [name]: value })
        // setFilteredHotels
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(filterArrWOptions(hotels, options))
        console.log(options)
        setFilteredHotels(prevState => filterArrWOptions(hotels, options))
        console.log(hotels)
    }

    return (
        <Container>
             <button className='reset' onClick={() => setFilteredHotels(prevState => hotels)}>Reset</button>
            <form action="" onSubmit={handleSubmit}>
                <h3>Filter By:</h3>
                <div>
                    <label htmlFor="">City:</label>
                    <select name='city' onChange={handleChange}>
                        {maxOptions.cities && (
                            maxOptions.cities.map((city) => {
                                return <option value={city}>{city}</option>
                            })
                        )}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Beds:</label>
                    <select name='beds' onChange={handleChange}>
                        {maxOptions.maxBeds && (
                            genNum(maxOptions.maxBeds).map((num) => {
                                return <option value={num}>{num}</option>
                            })
                        )}
                    </select>
                </div>
                <div>
                    <label htmlFor="">People:</label>
                    <select name='people' onChange={handleChange}>
                        {maxOptions.maxPeople && (
                            genNum(maxOptions.maxPeople).map((num) => {
                                return <option value={num}>{num}</option>
                            })
                        )}
                    </select>
                </div>
                <button onSubmit={handleSubmit}>submit</button>
            </form>
            <ul className="hotels">
                {filteredHotels.map((hotel) => {
                    const { names, beds, people, city, country, image } = hotel
                    maxOptions.maxBeds < beds && setMaxOptions({ ...maxOptions, maxBeds: beds })
                    maxOptions.maxPeople < people && setMaxOptions({ ...maxOptions, maxPeople: people })
                    return <li>
                        <h3>{names}</h3>
                        <h4>{city}, {country}</h4>
                        <h5>{beds} beds, {people} people</h5>
                        <img src={image} alt="" />
                    </li>

                })}
            </ul>
        </Container>
    )
}

export default GetHotels

// export const filterArrWOptions = (arr, options) => {
//     const props = Object.keys(options);
//     const size = Object.keys(options).length;
//     let tracker = size;
  
//     let temp = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < size; j++) {
//         if (typeof(arr[i][props[j]]) === "number") {
//           if (options[props[j]] >= arr[i][props[j]]) {
//             tracker--;
//           }
//         } else {
//           console.log(typeof(arr[i][props[j]]))
//           if (!(String(options[props[j]]) === String(arr[i][props[j]]))) {
//           } else {
//             tracker--;
//           }
//         }
//       }
//       if (tracker === 0) {
//         temp.push(arr[i]);
//       }
//       tracker = size;
//     }
  
//     return temp;
//   };
  
//   const options = { v1: 1, v2: 2, v3: 3 };
  
//   const arr = [
//     { v1: 1, v2: 2, v3: 3 },
//     { v1: 10, v2: 20, v3: 30 },
//     { v1: 0, v2: 0, v3: 0 }
//   ];
  
//   console.log(filterArrWOptions(arr, options));
//   //