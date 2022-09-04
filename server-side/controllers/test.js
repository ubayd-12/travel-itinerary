const getTest = (req, res) => {

    res.cookie("yo", "true")
    res.status(200).json({ username: "ubayd" })

}

const createTest = (req, res) => {

    try {
        if (req.body.username && req.body.password) {

        } else {
            throw new Error
        }
    } catch (err) {
        res.cookie("test", "yes")
        res.status(400).send("Filed Missing")
    }

}

module.exports = { getTest, createTest }