const jwt = require('jsonwebtoken')

require("dotenv").config()

const createAccessToken = (payload) => {

    return jwt.sign({ username: payload }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '60m'
    })

};

const createRefreshToken = (payload) => {

    return jwt.sign({ username: payload }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '21600m'
    })

};

module.exports = { createAccessToken, createRefreshToken }