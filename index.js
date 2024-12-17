require('dotenv').config(); 

const express = require('express');
const cors = require('cors')

const vehicaleRote = require('./routers/VehicaleRoute'); 

const app = express();

app.use(cors(
    {
        credentials:true,
        origin:'http://localhost:5173'
    }
))


// Routers
app.use('/api/vehicale', vehicaleRote);

const port = process.env.PORT || 5100

app.listen(port, () => {
    const token = process.env.ENCODE_TOKEN;
    console.log(token);
    console.log('Server listen' , port);
});
