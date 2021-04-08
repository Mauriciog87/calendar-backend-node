const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({
        ok: true
    });
});

app.listen(3001, () => {
    console.log(`Server running on port: ${4000}`);
});