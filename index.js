require('dotenv').config(); 

const express = require('express');
const cors = require('cors')

const vehicaleRoute = require('./routers/VehicaleRoute'); 
const reserationRoute = require('./routers/ReservationRoute'); 

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://causewaymy.web.app', 'https://causeway.my' , 'https://www.causeway.my' , 'https://causewaymy.firebaseapp.com' ];

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
app.use('/api/vehicale', vehicaleRoute);
app.use('/api/reservation', reserationRoute);

const port = process.env.PORT || 5100

app.listen(port, () => {
    const token = process.env.ENCODE_TOKEN;
    console.log(token);
    console.log('Server listen' , port);
});
