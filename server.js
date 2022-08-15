const express = require("express")

require('dotenv').config()

const bodyParser = require("body-parser")

const cors = require("cors")

const jwt = require('jsonwebtoken')

const PORT = 8000

const connectDB = require('./server-side/db/connection')

const accounts = require('./server-side/routes/accounts')

const register = require('./server-side/routes/register')

const login = require('./server-side/routes/login')

const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors())

app.use("/accounts", accounts)

app.use("/register", register)

app.use("/login", login)

app.get("/", (req, res) => {

    res.status(201).send("Homepage")

})

const start = async (url) => {

    try {

        await connectDB(url)

        app.listen(PORT, () => {

            console.log(`Listening on port ${PORT}`)

        })

    } catch (err) {

        console.log(err)

    }

}

start(process.env.MONGO_URI)