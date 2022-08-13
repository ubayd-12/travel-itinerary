const express = require('express')

const router = express.Router()

const { getMap } = require('../controllers/maps')

router.get("/", getMap)

module.exports = router