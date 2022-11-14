import React, { useEffect, useRef, useState } from 'react'

import { Container } from './ProfilePicStyle'

import { useUser } from '../../../hooks/useUser'

import axios from 'axios'

import { updateUserStorage } from '../../../functions/set-user'

const ProfilePic = ({ size, edit, border }) => {

    const { user } = useUser()

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



        uploadImage(previewSource)

        try {

            const res = await axios.post("/users", {
                id: user.id
            })

            console.log(res.data)

            updateUserStorage(JSON.stringify(res.data))

            // window.location.reload();

        } catch (err) {
            console.log(err)
        }

    }

    const uploadImage = async (base64EncodedImage) => {

        try {

            const res = await fetch("/api/uploads/profile-picture", {
                method: "POST",
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: {
                    "Content-type": "application/json"
                }
            })

            const data = await res.json()

            console.log(data.url)

            await axios.post('/api/uploads/update-profile-picture', {

                id: user.id,
                url: data.url,

            })

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {

        if (previewSource) {
            handleFileSubmit()
        }

    })

    let fileInputRef = React.createRef();
    return <Container size={size} border={border} profilePictureURL={user ? user.profilePicture : "https://res.cloudinary.com/dy1u0nvh8/image/upload/v1665289263/profile_pictures/istockphoto-470100848-612x612_tofji5.jpg"}>
        {edit ? <span onClick={() => fileInputRef.current.click()}>Edit</span> : undefined}
        <form className='img-form' action="" onSubmit={handleFileSubmit} hidden>
            <input ref={fileInputRef} type="file" name="image" onChange={handleFileInputChange} value={upload} className="upload-image"></input>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </Container>
}

export default ProfilePic