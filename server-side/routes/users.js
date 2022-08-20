const express = require('express')

const { getUsers, getSingleUser } = require('../controllers/users')

const router = express.Router()

router.get("/admin", getUsers)

router.get("/:id", getSingleUser)

module.exports = router