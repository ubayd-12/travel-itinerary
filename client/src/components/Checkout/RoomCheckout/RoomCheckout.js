import React from 'react'

import { Container } from './RoomCheckoutStyle'

const RoomCheckout = ({ room, adult }) => {
    return <Container>

        <h1 className='room-num'>Room {room.num}</h1>
        <span className='room-details'>{room.beds} beds, {room.adults} adults</span>
        <form action="">
            {adult.map((adult) => {

                return <>

                    <h3>Adult {adult.num}:</h3>

                    <label htmlFor="">First name:</label>
                    <input type="text" placeholder='E.g (John)' />
                    <label htmlFor="">Last name:</label>
                    <input type="text" placeholder='E.g (Doe)' />
                    <label htmlFor="">Date of birth:</label>
                    <input type="text" placeholder='mm/dd/yyyy' />
                    <label htmlFor="">Phone number:</label>
                    <input type="number" />

                </>

            })}

        </form>

    </Container>
}

export default RoomCheckout