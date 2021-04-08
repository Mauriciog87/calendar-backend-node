/*
    User routes /Auth
    host + /api/auth
*/

const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.json({
        ok: true
    });
});

module.exports =  router;