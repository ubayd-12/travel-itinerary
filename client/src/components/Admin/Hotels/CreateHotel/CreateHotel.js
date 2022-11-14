import React, { useState, useEffect } from 'react'

import { Container } from './StyleCreateHotel'

import axios from 'axios'

const CreateHotel = () => {

    const [upload, setUpload] = useState('');
    const [previewSource, setPreviewSource] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]

        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }

    }

    const handleFileSubmit = async (e) => {

        // e.preventDefault();

        console.log("submitting")

        // if (!previewSource) return;

        // console.log(previewSource)



        return uploadImage(previewSource)


    }

    const uploadImage = async (base64EncodedImage) => {

        try {

            const res = await fetch("/api/uploads/hotel-image", {
                method: "POST",
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: {
                    "Content-type": "application/json"
                }
            })

            const data = await res.json()

            return data.url

        } catch (err) {
            console.log(err)
        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        const url = await handleFileSubmit()
        console.log(url)//we are retriving the correct URL


        try {
            try {
                const res = await axios.post("/hotels", vals)
                console.log(res.data)//this is the id
                const res2 = await axios.post('/api/uploads/update-hotel-image', {

                    id: res.data,
                    image: url,

                })
                console.log(res2.data)
                setError(success)
                setTimeout(() => {
                    setError(none)
                }, 3000)
            } catch (err) {
                setError(fail)
                setTimeout(() => {
                    setError(none)
                }, 3000)
                console.log(err.data)

            }

        } catch (err) {

            console.log(err.data)

        }


    }

    const [vals, setVals] = useState({ name: "", beds: 0, people: 0, city: "", country: "" })
    const [error, setError] = useState("#daf4fb")
    const success = "#a3f5c5"
    const fail = "#ff9aa4"
    const none = "#daf4fb"

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value
        setVals({ ...vals, [name]: value })

    }

    return (
        <Container bg={error}>
            <form action="" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="">Name</label>
                    <input type="text" value={vals.name} onChange={handleChange} name="name" />
                </div>
                <div className="">
                    <label htmlFor="">Beds</label>
                    <input type="number" value={vals.beds} onChange={handleChange} name="beds" />
                </div>
                <div className="">
                    <label htmlFor="">People</label>
                    <input type="number" value={vals.people} onChange={handleChange} name="people" />
                </div>
                <div className="">
                    <label htmlFor="">City</label>
                    <input type="text" value={vals.city} onChange={handleChange} name="city" />
                </div>
                <div className="">
                    <label htmlFor="">Country</label>
                    <input type="text" value={vals.country} onChange={handleChange} name="country" />
                </div>
                <div className="">
                    <label htmlFor="">Image</label>
                    <input name="image" onChange={handleFileInputChange} value={upload} type="file" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Container>
    )
}

export default CreateHotel