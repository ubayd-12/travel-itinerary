const express = require('express')

const { getHotels, getSingleHotel, createHotel } = require('../controllers/hotels')

const router = express.Router()

router.get("/", getHotels)

router.get("/:id", getSingleHotel)

router.post("/", createHotel)

module.exports = router