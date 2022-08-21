const express = require('express')

const router = express.Router()

const { getAccounts } = require('../controllers/accounts')

router.get("/", getAccounts)

module.exports = router