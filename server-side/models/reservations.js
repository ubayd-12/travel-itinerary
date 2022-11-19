const mongoose = require('mongoose')

const ReservationSchema = mongoose.Schema({
    adults: {
        required: true,
        type: Array
    }, protection: {
        type: Boolean,
        required: true
    }, card: {
        type: Object
    }, confirmationEmail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Reservation", ReservationSchema)