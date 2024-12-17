const express = require('express')

const { getAllVehicaleTypes , getAllVehicales , getAllVehicalesClasses , getAllVehicaleFeatures } = require('../controllers/VehcialeController')

const router = express.Router()

router.get('/getAllVehicaleTypes' , getAllVehicaleTypes)
router.get('/getAllVehicales' , getAllVehicales)
router.get('/getAllVehicalesClasses' , getAllVehicalesClasses)
router.get('/getAllVehicaleFeatures' , getAllVehicaleFeatures)

module.exports = router