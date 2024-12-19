const express = require('express')

const { getAllVehicaleTypes , getAllVehicales , getAllVehicalesClasses , getAllVehicaleFeatures , getAllLocation } = require('../controllers/VehcialeController')

const router = express.Router()

router.get('/getAllVehicaleTypes' , getAllVehicaleTypes)
router.get('/getAllVehicales' , getAllVehicales)
router.get('/getAllVehicalesClasses' , getAllVehicalesClasses)
router.get('/getAllVehicaleFeatures' , getAllVehicaleFeatures)
router.get('/getAllLocation' , getAllLocation)

module.exports = router