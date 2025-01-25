const express = require('express')

const {checkAvailabilityVehicles , checkVehiclePrice , getAllSecuirityDeposit , getAdditonalCharges} = require('../controllers/ReservationController')

const router = express.Router()

router.get('/checkAvailabilityVehicles' , checkAvailabilityVehicles)
router.post('/checkVehiclePrice' , checkVehiclePrice)
router.get('/getAllSecuirityDeposit' , getAllSecuirityDeposit)
router.post('/getAdditonalCharges' , getAdditonalCharges)

module.exports = router