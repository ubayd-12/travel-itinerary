const mongoose = require('mongoose')

const { createID } = require('../functions/createID')

let id = 000000

const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, image: {
        type: String,
        deafult: "https://res.cloudinary.com/dy1u0nvh8/image/upload/v1666403565/hotel-images/nycst-double-guestroom-7425-hor-wide_h1icqp.webp"
    }, beds: {
        type: Number,
        required: true
    }, people: {
        type: Number,
        required: true
    }, availablity: {
        type: Array,
        default: []
    }, city: {
        type: String,
        required: true
    }, country: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Hotel", HotelSchema)