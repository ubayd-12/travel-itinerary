import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

import Navbar from '../Navbar/Navbar'

import { Container, SettingSectionContainer } from './ProfilePageStyle'
import ProfilePic from './ProfilePic/ProfilePic'

const ProfilePage = () => {

    const { user } = useContext(UserContext)

    return <Container>

        <Navbar bg={"black"} />
        <div className="grid">
            <div className="main">
                <ProfilePageSettingSection title='My Travel Details' options={[{ title: "Frequent Flyer & Membership" }, { title: "Personal Info" }, { title: "Room Preferences" }, { title: "Payment Methods" }, { title: "Emergency Contacts" }, { title: "TSA Info" }]} />
                <ProfilePageSettingSection title="My Account Info" options={[{ title: "Email and Password" }, { title: "Email Preferences" }, { title: "SMS Preferences" }, { title: "Connected Accounts" }, { title: "Travel Arranger" }]} />
                <span className='deactivate'>Deactivate Account</span>
                <span className='copyright'>© TravelFar 2022</span>
            </div>
            <div className="sidebar">
                <div className="profile-pic">
                    <ProfilePic size={"170px"} edit="true" />
                </div>
                {user && (<div><h4 className='username'>@{user.username}</h4>
                    <h3 className='name'>{user.firstName} {user.lastName}</h3></div>)}
                <h3 className='points-text'>Available Points</h3>
                <h4 className='points-value'>1,245</h4>
                <h3 className='member-since'>Member since 2007</h3>
                <div className='anniversary-credit'>
                    <h5 className='anniversary-credit-text'>Redeem Anniversary Credit</h5>
                </div>

            </div>
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