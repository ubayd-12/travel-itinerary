const { cloudinary } = require('../utils/cloudinary')

const accounts = require('../models/accounts')
const hotels = require('../models/hotels')

const uploadProfilePicture = async (req, res) => {

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

const uploadHotelImage = async (req, res) => {

    try {
        const image = req.body.data
        const uploadReponse = await cloudinary.uploader.upload(image, {
            upload_preset: 'hotel_pictures'
        })
        res.status(210).json({ url: uploadReponse.url })
    } catch (err) {
        console.log(err)
        res.status(456).send("fail")
    }

}

const setProfilePicture = async (req, res) => {

    try {
        const { id, url } = req.body
        await accounts.findByIdAndUpdate(id, { profilePicture: url })
        res.status(211).json({ msg: "Profile picture succesfully updated" })

    } catch (err) {

        console.log(err)
        res.status(444).json({ msg: "failed" })

    }

}

const setHotelImage = async (req, res) => {

    try {
        await hotels.findByIdAndUpdate(req.body.id, { image: req.body.image })
        res.status(211).json({ msg: "Hotel image succesfully updated" })

    } catch (err) {

        console.log(err)
        res.status(444).json({ msg: "failed" })

    }

}

module.exports = { uploadProfilePicture, uploadHotelImage, setProfilePicture, setHotelImage }