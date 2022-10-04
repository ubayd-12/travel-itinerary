const accounts = require('../models/accounts')

const bcrypt = require('bcrypt')

require("dotenv").config()

const { createAccessToken, createRefreshToken } = require('../functions/authFunctions')

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
                        const token = createAccessToken(user._id)
                        res.cookie("jwt", token, {
                            httpOnly: true,
                            maxAge: 3600000
                        })
                        return res.status(200).json({ msg: "Logged in", id: user._id, firstName: user.firstName, lastName: user.lastName, username: user.username, jwt: token })//I think mine is only sending back the ID but we'll see
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