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
        const user = await accounts.findOne({ _id: req.body.id })
        console.log(user)
        return res.status(200).json({ id: user._id, firstName: user.firstName, lastName: user.lastName, username: user.username, jwt: user.jwt, profilePicture: user.profilePicture })
    } catch (err) {
        return res.sendStatus(422)
    }
}

module.exports = { getUsers, getSingleUser }