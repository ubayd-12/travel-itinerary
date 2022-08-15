const express = require('express')

const router = express.Router()

const { accountLogin } = require('../controllers/login')

router.post("/", accountLogin)

module.exports = router