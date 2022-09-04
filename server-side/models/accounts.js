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
    }, refreshToken: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Accounts", AccountSchema)