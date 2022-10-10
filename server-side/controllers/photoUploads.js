const { cloudinary } = require('../utils/cloudinary')

const accounts = require('../models/accounts')

const uploadImage = async (req, res) => {

    try {
        const image = req.body.data
        const uploadReponse = await cloudinary.uploader.upload(image, {
            upload_preset: 'profile_pictures'
        })
        res.status(210).json({ url: uploadReponse.url })
    } catch (err) {
        console.log(err)
        res.status(456).send("fail")
    }

}

const setProfilePicture = async (req, res) => {

    try {
        await accounts.findByIdAndUpdate(req.body.id, { profilePicture: req.body.url })
        res.status(211).json({ msg: "Profile picture succesfully updated" })

    } catch (err) {

        console.log(err)
        res.status(444).json({ msg: "failed" })

    }

}

module.exports = { uploadImage, setProfilePicture }