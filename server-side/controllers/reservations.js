const Reservation = require('../models/reservations')

const getReservations = (req, res) => {
    res.send("Getting reservations")
}

const getSingleReservation = (req, res) => {
    res.send("Getting single reservation")
}

const createReservation = async (req, res) => {
    // const { adults, protection, card, confirmationEmail } = req.body
    // try {
    //     await Reservation.create({ adults: [adults[0], adults[1]], protection, card, confirmationEmail })
    //     res.status(200).json({ msg: "success" })
    // } catch (err) {
    //     res.status(400).json(err)
    // }
    try {
        const { adults, protection, card, confirmationEmail } = req.body
        let temp = []
        let missingField = false
        // if (!adults[0].firstName || !adults[0].lastName || !adults[0].dob || !adults[0].phone) {
        //     missingField = true
        //     temp += "adults "
        // }
        // firstName lastName dob phone
        console.log(adults.length)
        for (let i = 0; i < adults.length; i++) {
            if (!adults[i].firstName) {
                missingField = true;
                temp.push(`Adult ${i + 1} first name`)
            }
            if (!adults[i].lastName) {
                missingField = true;
                temp.push(`Adult ${i + 1} last name`)
            }
            if (!adults[i].dob) {
                missingField = true;
                temp.push(`Adult ${i + 1} dob\n`)
            }
            if (!adults[i].phone) {
                missingField = true;
                temp.push(`Adult ${i + 1} phone number`)
            }
        }
        if (typeof protection != "boolean") {
            missingField = true
            temp.push("Protection")
        }
        // if (!card.name || !card.number || !card.eMonth || !card.eYear || !card.secCode || !card.zipCode) {
        //     missingField = true
        //     temp += "card"
        // }
        if (!card.name) {
            missingField = true;
            temp.push("Card name")
        }
        if (!card.number) {
            missingField = true;
            temp.push("Card name")
        }
        if (!card.eMonth) {
            missingField = true;
            temp.push("Card expiration month")
        }
        if (!card.eYear) {
            missingField = true;
            temp.push("Card name")
        }
        if (!card.secCode) {
            missingField = true;
            temp.push("Card security code")
        }
        if (!card.zipCode) {
            missingField = true;
            temp.push("Card zip code")
        }
        if (!confirmationEmail) {
            missingField = true
            temp.push("Confirmation email")
        }
        if (missingField) {
            throw temp
        }
        try {
            await Reservation.create({ adults, protection, card, confirmationEmail })
            res.status(200).json({ msg: "success" })
        } catch (err) {
            res.status(400).json(err)
        }
    } catch (err) {
        res.status(400).json({ err })
    }

}

module.exports = { getReservations, getSingleReservation, createReservation }