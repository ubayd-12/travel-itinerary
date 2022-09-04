const express = require('express')

const { getProtected } = require('../controllers/protected')

const authUser = require('../middleware/authUser')

const router = express.Router()

router.get("/", authUser, getProtected)

module.exports = router