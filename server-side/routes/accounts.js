const express = require('express')

const router = express.Router()

const { getAccounts, createAccount, getSingleAccount, deleteAccount, updateAccount } = require('../controllers/accounts')

router.get("/", getAccounts)

router.post("/", createAccount)

router.get("/:id", getSingleAccount)

router.delete("/:id", deleteAccount)

router.patch("/:id", updateAccount)

module.exports = router