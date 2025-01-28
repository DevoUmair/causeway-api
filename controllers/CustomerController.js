const asyncHandler = require('express-async-handler');
const hqApi = require('../hq/hqApi'); 

//@DESC Create Customer
//@Router POST /api/createCustomer
//@access Private
const createCustomer = asyncHandler(async (req, res) => {
    try {
        // Capture all query parameters
        const queryParams = req.query;

        // Validate if query parameters exist
        if (Object.keys(queryParams).length === 0) {
            return res.status(400).json({ message: "No query parameters provided" });
        }

        console.log('Query Params:', queryParams);

        const response = await hqApi.post(
            `contacts/categories/3/contacts`,
            new URLSearchParams(queryParams), 
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error creating customer:", error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || "Failed to create customer",
        });
    }
});



module.exports = { createCustomer };
