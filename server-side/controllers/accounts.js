const accounts = require('../models/accounts.js')

const getAccounts = async (req, res) => {

    try {
        const accountsArr = await accounts.find()
        return res.status(200).json(accountsArr)
    } catch (err) {
        return res.status(400).json({ msg: err })
    }

}

module.exports = { getAccounts }
