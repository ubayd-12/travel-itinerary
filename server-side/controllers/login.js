const accounts = require('../models/accounts')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

require("dotenv").config()

const { createAccessToken, createRefreshToken } = require('../functions/jwtSignFunctions')

const accountLogin = async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    if (username && password) {

        try {

            const user = await accounts.findOne({ username: username })
            if (user === null) {
                throw err
            }
            try {
                if (await bcrypt.compare(password, user.password)) {
                    try {
                        const accessToken = createAccessToken(user.username)
                        return res.status(200).json({ msg: "Logged in", user, access_token: accessToken })
                    } catch (err) {
                        return res.status(450).json({ msg: "Could not sterilize" })
                    }
                } else {
                    return res.status(400).json({ msg: "Incorrect password!" })
                }
            } catch (err) {

            }

        } catch (err) {
            res.status(411).json({ msg: "User does not exist" })
        }
    } else {
        return res.status(400).json({ msg: "Field missing!" })
    }


}

module.exports = { accountLogin }