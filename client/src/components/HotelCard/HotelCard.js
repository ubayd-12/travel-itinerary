import React from 'react'

import { Container } from './HotelCardStyle'
import image from './Images/image.jpg'

const HotelCard = ({ hotel }) => {
    return <Container>

        <img src={hotel.image} className="image" alt='Background'>
        </img>
        <span className='image-text'>{hotel.name}</span>
        <div className="info">
            <div className="hotel-rating">
                <h4>4 Star Hotel</h4>
            </div>
            <div className="hotel-reviews">
                <h4>3.7 Star Rating</h4>
                <span>(3,542 Reviews)</span>
            </div>
            <div className="check-in">
                <h4>Check In:</h4>
                <span>12:00PM August 12th, 2022</span>
            </div>
            <div className="check-out">
                <h4>Check Out:</h4>
                <span>9:00AM August 15th, 2022</span>
            </div>
            <div className="room-details">
                <h4>Room 1:</h4>
                <span>2 Queen Beds</span>
            </div>
        </div>

    </Container>
}

export default HotelCard