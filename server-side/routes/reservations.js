const { getReservations, getSingleReservation, createReservation } = require('../controllers/reservations')

const express = require('express')

const router = express.Router()

router.get('/', getReservations)

router.get('/:id', getSingleReservation)

router.post('/', createReservation)

module.exports = router