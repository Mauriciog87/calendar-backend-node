const express = require('express');

const createUser = (request, response = express.response) => {
    response.json({
        ok: true,
        msg: 'register'
    });
}

const login  = (request, response = express.response) => {
    response.json({
        ok: true,
        meg: 'login'
    });
}

const renewToken = (request, response = express.response) => {
    response.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports = {
    createUser,
    login,
    renewToken
}