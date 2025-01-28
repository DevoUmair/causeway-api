const express = require('express');
const { createCustomer } = require('../controllers/CustomerController');

const router = express.Router();

router.post('/createCustomer', createCustomer); // Ensure the route matches your desired endpoint

module.exports = router;
