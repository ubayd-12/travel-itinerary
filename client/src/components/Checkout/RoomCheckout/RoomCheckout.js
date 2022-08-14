import React from 'react'

import { Container } from './RoomCheckoutStyle'

const RoomCheckout = ({ room, adult }) => {
    return <Container>

        <h1 className='room-num'>Room {room.num}</h1>
        <span className='room-details'>{room.beds} beds, {room.adults} adults</span>

        {adult.map((adult) => {

            return <>

                <h3 className='adult-num'>Adult {adult.num}:</h3>
                <form action="">
                    <div className="">
                        <label htmlFor="">First name:</label>
                        <input type="text" placeholder='E.g (John)' />
                    </div>
                    <div className="">
                        <label htmlFor="">Last name:</label>
                        <input type="text" placeholder='E.g (Doe)' />
                    </div>
                    <div className="">
                        <label htmlFor="">Date of birth:</label>
                        <input type="text" placeholder='mm/dd/yyyy' />
                    </div>
                    <div className="">
                        <label htmlFor="">Phone number:</label>
                        <input type="number" />
                    </div>
                </form>
            </>

        })}


    </Container>
}

export default RoomCheckout