const accounts = require('../models/accounts')

const bcrypt = require('bcrypt')

const registerAccount = async (req, res) => {

    if (req.body.firstName && req.body.lastName && req.body.dob && req.body.username && req.body.password && req.body.confirmPassword) {

        try {
            if (req.body.password === req.body.confirmPassword) {
                if ((await accounts.findOne({ username: req.body.username })) === null) {
                    const hashedPassword = await bcrypt.hash(req.body.password, 10)
                    const newUser = await accounts.create({ firstName: req.body.firstName, lastName: req.body.lastName, dob: req.body.dob, username: req.body.username, password: hashedPassword })
                    return res.status(201).json(newUser)
                } else {
                    return res.status(400).send("Username not available!")
                }
            } else {
                return res.status(400).send("Passwords don't match")
            }

        } catch (err) {
            return res.status(400).send({ msg: err })
        }

    } else {
        return res.status(400).send("Missing a field!")
    }
}

module.exports = { registerAccount }

// const newUser = await accounts.create({ firstName: req.body.firstName, lastName: req.body.lastName, dob: req.body.dob, username: req.body.username, password: req.body.password })
// return res.status(201).json(newUser)