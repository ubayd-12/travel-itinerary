const express = require('express')

const router = express.Router()

const { registerAccount } = require('../controllers/register')

router.post("/", registerAccount)

module.exports = router