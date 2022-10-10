const express = require('express')

const { getUsers, getSingleUser } = require('../controllers/users')

const router = express.Router()

router.get("/admin", getUsers)

router.post("/", getSingleUser)

module.exports = router