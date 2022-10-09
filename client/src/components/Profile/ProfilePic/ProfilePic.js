import React from 'react'

import { Container } from './ProfilePicStyle'

import { useUser } from '../../../hooks/useUser'

//all you do to auto submit is when the previewSource changes fire the submit function which can be found (useEffect with previewSource in the dependencies)

const ProfilePic = ({ size, edit, border }) => {

    const { user } = useUser()

    let fileInputRef = React.createRef();
    return <Container size={size} border={border} profilePictureURL={user ? user.profilePicture : "https://res.cloudinary.com/dy1u0nvh8/image/upload/v1665289263/profile_pictures/istockphoto-470100848-612x612_tofji5.jpg"}>
        {edit ? <span onClick={() => fileInputRef.current.click()}>Edit</span> : undefined}
        <form className='img-form' action="" hidden>
            <input ref={fileInputRef} type="file" name="image" className="upload-image"></input>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </Container>
}

export default ProfilePic