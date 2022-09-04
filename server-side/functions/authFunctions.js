const jwt = require("jsonwebtoken")
require('dotenv').config({ path: "../../" })


const createAccessToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h"
    })
}

const createRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "15d"
    })
}

module.exports = { createAccessToken, createRefreshToken }