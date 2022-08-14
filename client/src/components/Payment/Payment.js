import React from 'react'

import { Form } from './PaymentStyle'

const Payment = () => {
    return <Form>
        <div className='payment-methods'>
            <span className='active'>Credit/Debit Card</span>
            <span>PayPal</span>
            <span>Monthly Payment</span>
        </div>
        <div className="payment-input-field">
            <label htmlFor="">Name on card:</label>
            <input type="text" placeholder='E.g (John Doe)' className='name-on-card-input' />
        </div>
        <div className="payment-input-field">
            <label htmlFor="">Credit/Debit card number:</label>
            <input type="number" className='card-number-input' />
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
            <input type="number" name="" id="" placeholder='Year' className='card-expiration-input' />
        </div>
        <div className="payment-input-field">
            <label htmlFor="">Security code:</label>
            <input type="number" name="" id="" className='card-security-code-input' />
        </div>
        <div className="payment-input-field">
            <label htmlFor="">Billing ZIP code:</label>
            <input type="number" name="" id="" className='card-zip-code-input' />
        </div>
    </Form>
}

export default Payment