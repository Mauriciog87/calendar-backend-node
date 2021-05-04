const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

require('dotenv').config();

const app = express();

//database
dbConnection();

//cors
app.use(cors());

// read and parse body
app.use(express.json());

//Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//Public folder
app.use(express.static('public'));

//listen request
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});