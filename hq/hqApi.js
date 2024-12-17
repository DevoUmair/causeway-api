require('dotenv').config(); // Ensure environment variables are loaded

const axios = require('axios');

const token = process.env.ENCODE_TOKEN; // Load the token from environment variables

const hqApi = axios.create({
    baseURL: 'https://api-asia.caagcrm.com/api-asia/',
});

hqApi.defaults.headers.common['Authorization'] = `Basic ${token}`;
hqApi.defaults.headers.common['Content-Type'] = 'application/json';

module.exports = hqApi;
