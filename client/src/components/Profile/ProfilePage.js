import React, { useEffect, useContext, useState } from 'react'

import { useUser } from '../../hooks/useUser'

import Navbar from '../Navbar/Navbar'

import { Container, SettingSectionContainer } from './ProfilePageStyle'
import ProfilePic from './ProfilePic/ProfilePic'

import axios from 'axios'

const ProfilePage = () => {

    const { user, dispatch } = useUser()

    // useEffect(() => {

    //     const userData = JSON.parse(localStorage.getItem("user"))

    //     dispatch({ type: "login", payload: userData })

    // }, [])

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

    const handleFileSubmit = (e) => {

        e.preventDefault();

        console.log("submitting")

        if (!previewSource) return;

        uploadImage(previewSource)

    }

    const uploadImage = async (base64EncodedImage) => {

        // console.log(base64EncodedImage);

        try {
            // await axios.post("/api/upload", JSON.stringify({ data: base64EncodedImage }), {
            //     headers: {
            //         'Conent-type': 'application/json'
            //     }
            // })

            await fetch("/api/upload", {
                method: "POST",
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: {
                    "Content-type": "application/json"
                }
            })

        } catch (err) {
            console.log(err)
        }

    }

    return <Container>

        <Navbar bg={"black"} />
        <div className="grid">
            <div className="main">
                <ProfilePageSettingSection title='My Travel Details' options={[{ title: "Frequent Flyer & Membership" }, { title: "Personal Info" }, { title: "Room Preferences" }, { title: "Payment Methods" }, { title: "Emergency Contacts" }, { title: "TSA Info" }]} />
                <ProfilePageSettingSection title="My Account Info" options={[{ title: "Email and Password" }, { title: "Email Preferences" }, { title: "SMS Preferences" }, { title: "Connected Accounts" }, { title: "Travel Arranger" }]} />
                <span className='deactivate'>Deactivate Account</span>
                <span className='copyright'>© TravelFar 2022</span>
            </div>
            {user ? <div className="sidebar">
                <div className="profile-pic">
                    <ProfilePic size={"170px"} edit="true" />
                    <form action="" onSubmit={handleFileSubmit}>
                        <input type="file" name="image" onChange={handleFileInputChange} value={upload} className="upload-image"></input>
                        <button className='btn' type='submit'>Submit</button>
                    </form>
                </div>
                <div><h4 className='username'>@{user.username}</h4>
                    <h3 className='name'>{user.firstName} {user.lastName}</h3></div>
                <h3 className='points-text'>Available Points</h3>
                <h4 className='points-value'>1,245</h4>
                <h3 className='member-since'>Member since 2007</h3>
                <div className='anniversary-credit'>
                    <h5 className='anniversary-credit-text'>Redeem Anniversary Credit</h5>
                </div>

            </div> : <div className="sidebar">
                <div className="profile-pic">
                    <ProfilePic size={"170px"} edit="true" />
                </div>
                <div><h4 className='username'>@johndoe</h4>
                    <h3 className='name'>John Doe</h3></div>
                <h3 className='points-text'>Available Points</h3>
                <h4 className='points-value'>1,245</h4>
                <h3 className='member-since'>Member since 2007</h3>
                <div className='anniversary-credit'>
                    <h5 className='anniversary-credit-text'>Redeem Anniversary Credit</h5>
                </div>

            </div>}

        </div>

    </Container>

}

const ProfilePageSettingSection = ({ title, options }) => {

    return <SettingSectionContainer>
        <h2>{title}</h2>
        <div className="options">
            {options.map((item) => {

                return <span>{item.title}</span>

            })}
        </div>

    </SettingSectionContainer>


}

export default ProfilePage