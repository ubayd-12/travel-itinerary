import React from 'react'

import { Container, CheckoutDiv } from './CheckoutStyle'

import { AiFillCreditCard } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import Navbar from '../Navbar/Navbar'
import RoomCheckout from './RoomCheckout/RoomCheckout'
import Payment from '../Payment/Payment'
import HotelCard from '../HotelCard/HotelCard'

const Checkout = () => {
    return <div>
        <Navbar bg={"black"} />
        <Container>
            <CheckoutDiv>
                <div className="customer-info">
                    <RoomCheckout room={{ num: 1, beds: 2, adults: 2 }} adult={[{ num: 1 }, { num: 2 }]} />
                </div>
                <div className="hotel-protection indent">
                    <BsShieldFillCheck className='hotel-protection-shield' />
                    <h1>Protect your hotel</h1>
                    <span className='badge-recommended'>Recommended</span>
                    <p className='important-info'><span className='bold'>Important:</span> Trip cancellation due to government travel advisories, fear of travel, or change of mind is not covered. Travel insurance may provide coverage for COVID-19 diagnosed illness. COVID-19 is a foreseen event and certain other coverages will not apply.  Learn more</p>
                    <div className='reimbursement'>
                        <p><span className='bold'>Note:</span> If you are a resident of WASHINGTON state, please click here to view products that you are eligible to purchase.
                            <span className='bold'>Cover your stay against the unexpected:</span>
                        </p>
                        <span className='bullet'>1. Up to 100% hotel reimbursement if you're sick and have a late cancellation
                        </span>
                        <span className='bullet'>2. Up to 100% reimbursement on unused hotel nights if you are sick and need to come home early
                        </span>
                        <span className='bullet'>3. Up to $150 for a hotel or meals if your trip is delayed for covered reasons
                        </span>
                        <span className='bullet'>4. Up to $150 for covered essentials if your bag is delayed</span>
                    </div>
                    <form action="">
                        <h2>Select yes or no to continue with your booking:</h2>
                        <div className='accept-protection'>
                            <input type="radio" name="" id="" />
                            <label>Yes, I would like to accept trip insurace</label>
                            <div className='protection-price'>
                                <span className='price'>$6.79</span>
                                <span className='per-person'>Per person</span>
                            </div>
                        </div>
                        <div className='decline-protection'>
                            <input type="radio" name="" id="" />
                            <label>No, I would like to decline trip insurace</label>
                        </div>
                    </form>
                </div>
                <div className="payment indent">
                    <AiFillCreditCard className='payment-card' />
                    <h1>Payment</h1>
                    <span className='badge-secure'>Secure</span>
                    <Payment />
                </div>
                <div className="complete-booking indent">
                    <div className="manage-booking">
                        <h1>Manage your booking</h1>
                        <form action="">
                            <label htmlFor="">Confirmation email:</label>
                            <input type="email" />
                        </form>
                    </div>
                    <h1 className='important-info-title'>Important information about your booking</h1>
                    <div className="important-info-bullets">
                        <p>• Cancellations or changes made after 11:59pm (property local time) on Aug 23, 2022 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</p>
                        <p>• This property offers transfers from the airport. Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation. This property does not offer after-hours check-in. Front desk staff will greet guests on arrival.</p>
                        <p>By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules and Restrictions Opens in a new window. and Terms of Use Opens in a new window..
                        </p>
                        <p>We use secure transmission and encrypted storage to protect your personal information.This payment will be processed in the U.S. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.</p>
                        <p>We use secure transmission and encrypted storage to protect your personal information. This payment will be processed in the U.S. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.
                        </p>
                    </div>
                    <button className='complete-booking-btn'>Complete your booking<FaArrowRight className='complete-booking-arrow' /></button>
                </div>
            </CheckoutDiv>
            <div className="test">
                <HotelCard />
            </div>
        </Container>
    </div>
}

export default Checkout