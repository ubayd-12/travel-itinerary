const JWT = require('jsonwebtoken')
const users = require('../models/accounts')


const auth = async (req, res, next) => {

    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET)

            console.log("success");

            res.user = await users.findById(decoded.id.replace(/\"/g, ""))

            next()

        } catch (err) {
            res.status(400).json({ status: "final", msg: err })
        }

    }

}

module.exports = auth