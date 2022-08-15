const accounts = require('../models/accounts')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const accountLogin = async (req, res) => {

    try {

        const username = req.body.username
        const password = req.body.password

        try {

            const user = await accounts.findOne({ username: username })
            if (user === null) {
                throw err
            }
            try {
                if (await bcrypt.compare(password, user.password)) {
                    try {
                        const accessToken = jwt.sign({ username: user.username }, "4kjrklfjdskaljfk")
                        return res.status(200).json({ msg: "Logged in", user, access_token: accessToken })
                    } catch (err) {
                        return res.status(450).send("Could not sterilize")
                    }
                } else {
                    return res.status(400).send("Incorrect password!")
                }
            } catch (err) {

            }

        } catch (err) {
            res.status(411).json("User does not exist")
        }
    } catch (err) {
        return res.status(400).send("Network Err")
    }


}

module.exports = { accountLogin }