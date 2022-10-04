const express = require("express")

require('dotenv').config()

const bodyParser = require("body-parser")

const cors = require("cors")

const cookieParser = require('cookie-parser')

const PORT = 8000

const connectDB = require('./server-side/db/connection')

const accounts = require('./server-side/routes/accounts')

const register = require('./server-side/routes/register')

const login = require('./server-side/routes/login')

const users = require('./server-side/routes/users')

const test = require('./server-side/routes/test')

const protected = require('./server-side/routes/protected')

const photoUploads = require('./server-side/routes/photoUploads')

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(cors(corsOptions))

app.use("/accounts", accounts)

app.use("/register", register)

app.use("/login", login)

app.use("/users", users)

app.use("/test", test)

app.use("/protected", protected)

app.use('/api/uploads', photoUploads)

app.get("/", (req, res) => {

    res.cookie("test", "true")
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