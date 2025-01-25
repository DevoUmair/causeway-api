const asyncHandler = require('express-async-handler');
const hqApi = require('../hq/hqApi'); 
const { query } = require('express');


//@DESC Get Available Vehicles In Specific Locations and Date Time
//@Router GET /api/checkAvailabilityVehicles
//@access Private
const checkAvailabilityVehicles = asyncHandler(async (req, res) => {
    try {
        const { pick_up_date, pick_up_location_id, return_location_id, return_date } = req.query;

        // Construct the API call with query parameters
        const response = await hqApi.get('car-rental/ota/availability/', {
            params: {
                pick_up_date,
                return_date,
                pick_up_location_id,
                return_location_id,
            },
            headers: {
                Accept: 'application/vnd.api.v2+json',
            },
        });

        res.status(200).json(response.data.data);
    } catch (error) {
        console.error('Error fetching vehicle availability:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle availability',
        });
    }
});



//@DESC Get All Location
//@Router GET /api/getAllSecuirityDeposit
//@access Private
const getAllSecuirityDeposit = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('car-rental/security-deposits');
        res.status(200).json(response.data?.car_rental_security_deposit_rules);
    } catch (error) {
        console.error('Error fetching Secuirity Deposit :', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch location',
        });
    }
});

//@DESC Get Available Vehicles In Specific Locations and Date Time
//@Router POST /api/checkVehiclePrice
//@access Private
const checkVehiclePrice = asyncHandler(async (req, res) => {
    try {
        const {
            pick_up_date,
            pick_up_location,
            return_location,
            return_date,
            pick_up_time,
            return_time,
            brand_id,
            vehicle_class_id,
            additionalCharges
        } = req.query;

        console.log(req.query);

        // Construct the API call with query parameters
        const response = await hqApi.post(
            'car-rental/reservations/additional-charges',
            {
              // Request Body
              pick_up_date,
              return_date,
              pick_up_location,
              return_location,
              pick_up_time,
              return_time,
              brand_id,
              vehicle_class_id,
              additional_charges : additionalCharges,
            }
        );          

        res.status(200).json(response?.data);
    } catch (error) {
        console.error('Error fetching vehicle price:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle price',
        });
    }
});



//@DESC Get Available Vehicles In Specific Locations and Date Time
//@Router GET/api/getAdditonalCharges
//@access Private
const getAdditonalCharges = asyncHandler(async (req, res) => {
    try {
        const {
            pick_up_date,
            pick_up_location,
            return_location,
            return_date,
            pick_up_time,
            return_time,
            brand_id,
            vehicle_class_id,
        } = req.query;

        console.log(query);

        // Construct the API call with query parameters
        const response = await hqApi.get('car-rental/reservations/additional-charges', {
            params: {
                pick_up_date,
                return_date,
                pick_up_location,
                return_location,
                pick_up_time, // Add pick_up_time
                return_time,  // Add return_time
                brand_id,     // Add brand_id
                vehicle_class_id, // Add vehicle_class_id,
            }
        });      
        
        res.status(200).json(response?.data?.data?.additional_charges);
    } catch (error) {
        console.error('Error fetching getting Additional Charges:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to get additional charges',
        });
    }
});

module.exports = { checkAvailabilityVehicles , checkVehiclePrice , getAllSecuirityDeposit , getAdditonalCharges };
