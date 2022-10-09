const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, lastName: {
        type: String,
        required: true
    }, dob: {
        type: String,
        required: true
    }, username: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true,
        minlength: 8
    }, profilePicture: {
        type: String,
        required: false,
        default: "https://res.cloudinary.com/dy1u0nvh8/image/upload/v1665289263/profile_pictures/istockphoto-470100848-612x612_tofji5.jpg"
    }, refreshToken: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Accounts", AccountSchema)