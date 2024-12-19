const asyncHandler = require('express-async-handler');
const hqApi = require('../hq/hqApi'); 


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
                pick_up_location_id,
                return_location_id,
                return_date,
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


module.exports = { checkAvailabilityVehicles };
