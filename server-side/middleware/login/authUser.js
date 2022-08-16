const jwt = require('jsonwebtoken')

const authUser = (req, res, next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (token == null) {
        return res.status(400).send("No token")
    }

    jwt.verify(token, "4kjrklfjdskaljfk", (err, user) => {
        if (err) return res.status(400).send("Error!!")
        req.user = user
        next()
    })

}

module.exports = authUser