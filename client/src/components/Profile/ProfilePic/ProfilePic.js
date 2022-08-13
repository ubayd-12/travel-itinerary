import React from 'react'

import { Container } from './ProfilePicStyle'

const ProfilePic = ({ size, edit, border }) => {
    return <Container size={size} border={border}>
        {edit ? <span>Edit</span> : undefined}
    </Container>
}

export default ProfilePic