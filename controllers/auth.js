const express = require('express');

const createUser = (request, response = express.response) => {
    const {name, email, password} = request.body;

    response.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
}

const login  = (request, response = express.response) => {
    const {email, password} = request.body;

    response.status(200).json({
        ok: true,
        meg: 'login',
        email,
        password
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