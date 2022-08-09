const express = require("express")

const bodyParser = require("body-parser")

const cors = require("cors")

const PORT = 8000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors())

app.get("/", (req, res) => {

    res.status(201).send("Homepage")

})

app.listen(PORT, () => {

    console.log(`Listening on port ${PORT}`)

})