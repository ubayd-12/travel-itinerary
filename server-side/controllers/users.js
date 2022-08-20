const accounts = require('../models/accounts')

const getUsers = async (req, res) => {

    try {
        const users = await accounts.find()
        res.status(200).json(users)
    } catch (err) {
        res.sendStatus(400)
    }

}

const getSingleUser = async (req, res) => {
    try {
        const user = await accounts.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.sendStatus(400)
    }
}

module.exports = { getUsers, getSingleUser }