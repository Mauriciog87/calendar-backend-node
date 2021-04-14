const express = require('express');
const {validationResult} = require('express-validator');

const createUser = (request, response = express.response) => {
    const {name, email, password} = request.body;

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

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

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

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