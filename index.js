require('dotenv').config(); 

const express = require('express');
const cors = require('cors')

const vehicaleRote = require('./routers/VehicaleRoute'); 

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://causewaymy.web.app/', 'https://causeway.my' , 'https://www.causewaymy.web.app/'];

app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS')); // Reject the request
        }
    }
}));

// Routers
app.use('/api/vehicale', vehicaleRote);

const port = process.env.PORT || 5100

app.listen(port, () => {
    const token = process.env.ENCODE_TOKEN;
    console.log(token);
    console.log('Server listen' , port);
});
