const { uploadImage, setProfilePicture } = require('../controllers/photoUploads')

const express = require('express')

const router = express.Router()

router.post("/", uploadImage)

router.post("/update-profile-picture", setProfilePicture)

module.exports = router