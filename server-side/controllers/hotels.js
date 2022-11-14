const hotels = require('../models/hotels')

const getHotels = async (req, res) => {

    res.status(200).json(await hotels.find())

}

const getSingleHotel = async (req, res) => {

    res.status(200).send("Get Single Hotel")


}

const createHotel = async (req, res) => {

    const { name, beds, people, city, country, image } = req.body

    const data = await hotels.create({ name: name, beds: beds, people: people, city: city, country: country, image: image })

    res.status(200).json(data._id)

}

module.exports = { getHotels, getSingleHotel, createHotel }