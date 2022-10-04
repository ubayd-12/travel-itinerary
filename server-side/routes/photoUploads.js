const { uploadImage } = require('../controllers/photoUploads')

const express = require('express')

const router = express.Router()

router.post("/", uploadImage)

module.exports = router