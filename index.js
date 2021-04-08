const express = require('express');

require('dotenv').config();

const app = express();

//Routes
app.use('/api/auth', require('./routes/auth'));

//Public folder
app.use(express.static('public'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});