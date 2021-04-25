const express = require('express');
const { dbConnection } = require('./database/config');

require('dotenv').config();

const app = express();

//database
dbConnection();

// read and parse body
app.use(express.json());

//Routes
app.use('/api/auth', require('./routes/auth'));

//Public folder
app.use(express.static('public'));

//listen request
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});