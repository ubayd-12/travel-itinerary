const { uploadProfilePicture, uploadHotelImage, setProfilePicture, setHotelImage } = require('../controllers/photoUploads')

const express = require('express')

const router = express.Router()

router.post("/profile-picture", uploadProfilePicture)

router.post("/hotel-image", uploadHotelImage)

router.post("/update-profile-picture", setProfilePicture)

router.post("/update-hotel-image", setHotelImage)

module.exports = router