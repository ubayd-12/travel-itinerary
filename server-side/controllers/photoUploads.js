const { cloudinary } = require('../utils/cloudinary')

const uploadImage = async (req, res) => {

    try {
        const image = req.body.data
        await cloudinary.uploader.upload(image, {
            upload_preset: 'profile_pictures'
        })
        // console.log(uploadReponse)
        res.status(210).send("ok")
    } catch (err) {
        console.log(err)
        res.status(410).send("fail")
    }

}

module.exports = { uploadImage }