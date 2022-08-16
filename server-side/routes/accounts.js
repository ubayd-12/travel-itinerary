const express = require('express')

const router = express.Router()

const authUser = require('../middleware/login/authUser')

const { getAccounts } = require('../controllers/accounts')

router.get("/", authUser, getAccounts)

module.exports = router