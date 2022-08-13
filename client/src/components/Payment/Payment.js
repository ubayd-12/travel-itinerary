import React from 'react'

import { } from './PaymentStyle'

const Payment = () => {
    return <form>

        <label htmlFor="">Name on card:</label>
        <input type="text" placeholder='E.g (John Doe)' />
        <label htmlFor="">Credit/Debit card number:</label>
        <input type="number" />
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
        <input type="number" name="" id="" placeholder='Year' />
        <label htmlFor="">Security code:</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Billing ZIP code:</label>
        <input type="number" name="" id="" />

    </form>
}

export default Payment