import React, { useState } from 'react'

import { Container, CheckoutDiv } from './CheckoutStyle'

import { AiFillCreditCard } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import Navbar from '../Navbar/Navbar'
import RoomCheckout from './RoomCheckout/RoomCheckout'
import Payment from '../Payment/Payment'
import HotelCard from '../HotelCard/HotelCard'

import { Form } from '../Payment/PaymentStyle';
import { RoomContainer } from './RoomCheckout/RoomCheckoutStyle';

import { useLocation, useNavigate } from 'react-router-dom';

import { createArrFromNum, createArrAdults } from '../../functions/createArr';

const Checkout = () => {
    const location = useLocation()
    const hotel = location.state
    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/confirmation`;
        navigate(path);
    }
    const adult = createArrFromNum(hotel.people)
    const room = { num: 1, beds: hotel.beds, adults: hotel.people }

    const defaultValues = {
        adults: createArrAdults(hotel.people),  //[{ firstName: "", lastName: "", dob: "", phone: "" }, { firstName: "", lastName: "", dob: "", phone: "" }]
        card: {
            name: "",
            number: "",
            eMonth: "",
            eYear: "",
            secCode: "",
            zipCode: "",
        },
        confirmationEmail: ""
    }

    const [values, setValues] = useState(defaultValues)

    const handleChange = (e, sec, specific) => {

        const name = e.target.name
        const val = e.target.value
        if (specific === "adult") {
            console.log(sec)
            if (name === "phone") {
                setValues({ ...values, adults: [...values.adults, values.adults[sec][name] = val] })
            } else {
                setValues({ ...values, adults: [...values.adults, values.adults[sec][name] = val] })
            }
        } else if (sec == "card") {
            setValues({ ...values, card: { ...values.card, [name]: val } })
        } else {
            setValues({ ...values, [name]: val })
        }
    }

    return <div>

        <Navbar bg={"black"} />
        <Container>
            <CheckoutDiv>
                <form>
                    <div className="customer-info">
                        {/** below is the original roomCheckout */}
                        {/* <RoomCheckout room={{ num: 1, beds: 2, adults: 2 }} adult={[{ num: 1 }, { num: 2 }]} /> */}
                        <RoomContainer>

                            <h1 className='room-num'>Room {room.num}</h1>
                            <span className='room-details'>{room.beds} beds, {room.adults} adults</span>

                            {adult.map((adult) => {

                                return <>

                                    <h3 className='adult-num'>Adult {adult.num}:</h3>
                                    <div className='room-div'>
                                        <div className="">
                                            <label htmlFor="">First name:</label>
                                            <input type="text" placeholder='E.g (John)' name='firstName' value={values.adults[adult.num - 1].firstName} onChange={(e) => handleChange(e, adult.num - 1, "adult")} />
                                        </div>
                                        <div className="">
                                            <label htmlFor="">Last name:</label>
                                            <input type="text" placeholder='E.g (Doe)' name='lastName' value={values.adults[adult.num - 1].lastName} onChange={(e) => handleChange(e, adult.num - 1, "adult")} />
                                        </div>
                                        <div className="">
                                            <label htmlFor="">Date of birth:</label>
                                            <input type="text" placeholder='mm/dd/yyyy' name='dob' value={values.adults[adult.num - 1].dob} onChange={(e) => handleChange(e, adult.num - 1, "adult")} />
                                        </div>
                                        <div className="">
                                            <label htmlFor="">Phone number:</label>
                                            <input className='number-input' type="number" name='phone' value={values.adults[adult.num - 1].phone} onChange={(e) => handleChange(e, adult.num - 1, "adult")} />
                                        </div>
                                    </div>
                                </>

                            })}

                        </RoomContainer>
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
                    </div>
                    <div className="payment indent">
                        <AiFillCreditCard className='payment-card' />
                        <h1>Payment</h1>
                        <span className='badge-secure'>Secure</span>
                        {/** orignal good payment below */}
                        {/* <Payment /> */}
                        <Form>
                            <div className='payment-methods'>
                                <span className='active'>Credit/Debit Card</span>
                                <span>PayPal</span>
                                <span>Monthly Payment</span>
                            </div>
                            <div className="payment-input-field">
                                <label htmlFor="">Name on card:</label>
                                <input type="text" placeholder='E.g (John Doe)' className='name-on-card-input' name='name' value={values.card.name} onChange={(e) => handleChange(e, "card")} />
                            </div>
                            <div className="payment-input-field">
                                <label htmlFor="">Credit/Debit card number:</label>
                                <input type="number" className='card-number-input' name='number' value={values.card.number} onChange={(e) => handleChange(e, "card")} />
                            </div>
                            <div className="payment-input-field">
                                <label htmlFor="">Expiration Date:</label>
                                <select placeholder='Month'>
                                    <option>Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <input type="number" name="eYear" id="" placeholder='Year' className='card-expiration-input' value={values.card.eYear} onChange={(e) => handleChange(e, "card")} />
                            </div>
                            <div className="payment-input-field">
                                <label htmlFor="">Security code:</label>
                                <input type="number" name="secCode" id="" className='card-security-code-input' value={values.card.secCode} onChange={(e) => handleChange(e, "card")} />
                            </div>
                            <div className="payment-input-field">
                                <label htmlFor="">Billing ZIP code:</label>
                                <input type="number" name="zipCode" id="" className='card-zip-code-input' value={values.card.zipCode} onChange={(e) => handleChange(e, "card")} />
                            </div>
                        </Form>
                    </div>
                    <div className="complete-booking indent">
                        <div className="manage-booking">
                            <h1>Manage your booking</h1>
                            <div action="">
                                <label htmlFor="">Confirmation email:</label>
                                <input type="email" name='confirmationEmail' value={values.confirmationEmail} onChange={handleChange} />
                            </div>
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
                        <button className='complete-booking-btn' onClick={routeChange}>Complete your booking<FaArrowRight className='complete-booking-arrow' /></button>
                    </div>
                </form>
            </CheckoutDiv>
            <div className="test">
                <HotelCard hotel={hotel} />
            </div>
        </Container>
    </div>
}

export default Checkout