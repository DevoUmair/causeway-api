const express = require('express')

const {checkAvailabilityVehicles} = require('../controllers/ReservationController')

const router = express.Router()

router.get('/checkAvailabilityVehicles' , checkAvailabilityVehicles)

module.exports = router