const express = require('express');

const createUser = (request, response = express.response) => {
    const {name, email, password} = request.body;

    if (name.length < 5) {
        return response.status(400).json({
            ok: false,
            msg: 'Name must be 5 character lentgh at least'
        });
    }

    response.json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
}

const login  = (request, response = express.response) => {
    const {email, password} = request.body;

    response.json({
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