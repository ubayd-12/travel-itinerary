import React from 'react'

import { Container, CheckoutDiv } from './CheckoutStyle'

import Navbar from '../Navbar/Navbar'

import RoomCheckout from './RoomCheckout/RoomCheckout'
import Payment from '../Payment/Payment'

const Checkout = () => {
    return <Container>
        <Navbar bg={"black"} />
        <h1>Checkout</h1>
        <CheckoutDiv>
            <div className="">

            </div>
            <RoomCheckout room={{ num: 1, beds: 2, adults: 2 }} adult={[{ num: 1 }, { num: 2 }]} />
            <div className="hotel-protection">
                <h1>Protect your hotel</h1>
                <span>Recommended</span>
                <p>Important: Trip cancellation due to government travel advisories, fear of travel, or change of mind is not covered. Travel insurance may provide coverage for COVID-19 diagnosed illness. COVID-19 is a foreseen event and certain other coverages will not apply.  Learn more</p>
                <p>Note: If you are a resident of WASHINGTON state, please click here to view products that you are eligible to purchase.
                    Cover your stay against the unexpected:
                </p>
                <span>1. Up to 100% hotel reimbursement if you're sick and have a late cancellation
                </span>
                <span>2. Up to 100% reimbursement on unused hotel nights if you are sick and need to come home early
                </span>
                <span>3. Up to $150 for a hotel or meals if your trip is delayed for covered reasons
                </span>
                <span>4. Up to $150 for covered essentials if your bag is delayed</span>
                <form action="">
                    <h2>Select yes or no to continue with your booking:</h2>
                    <label>Yes, I would like to accept trip insurace</label>
                    <input type="radio" name="" id="" />
                    <label>No, I would like to decline trip insurace</label>
                    <input type="radio" name="" id="" />
                </form>
            </div>
            <div className="payment">
                <h1>Payment</h1>
                <span>Secure</span>
                <Payment />
            </div>
            <div className="complete-booking">
                <h1>Manage your booking</h1>
                <form action="">
                    <label htmlFor="">Confirmation email:</label>
                    <input type="email" placeholder='email' />
                </form>
                <h1>Important information about your booking</h1>
                <p>• Cancellations or changes made after 11:59pm (property local time) on Aug 23, 2022 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</p>
                <p>• This property offers transfers from the airport. Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation. This property does not offer after-hours check-in. Front desk staff will greet guests on arrival.</p>
                <p>By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules and Restrictions Opens in a new window. and Terms of Use Opens in a new window..
                </p>
                <p>We use secure transmission and encrypted storage to protect your personal information.This payment will be processed in the U.S. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.</p>
                <p>We use secure transmission and encrypted storage to protect your personal information. This payment will be processed in the U.S. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.
                </p>
                <button>Complete your booking</button>
            </div>
        </CheckoutDiv>
    </Container>
}

export default Checkout