const accounts = require('../models/accounts.js')

const getAccounts = (req, res) => {

    res.status(200).send("Get accounts")

}


const createAccount = (req, res) => {

    res.status(200).send("Create account")

}


const getSingleAccount = (req, res) => {

    res.status(200).send("Get single accounts")

}


const deleteAccount = (req, res) => {

    res.status(200).send("Delete account")

}


const updateAccount = (req, res) => {

    res.status(200).send("Update account")

}

module.exports = { getAccounts, createAccount, getSingleAccount, deleteAccount, updateAccount }
