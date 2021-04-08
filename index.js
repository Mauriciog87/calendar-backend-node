const express = require('express');

require('dotenv').config();

const app = express();

// app.get('/', (request, response) => {
//     response.json({
//         ok: true
//     });
// });

app.use(express.static('public'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});