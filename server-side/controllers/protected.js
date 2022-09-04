const getProtected = (req, res) => {

    res.status(200).json(res.user)

}

module.exports = { getProtected }