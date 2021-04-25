const express = require('express');
const User = require('../models/UserModel');

const createUser = async(request, response = express.response) => {
    const {email, password} = request.body;

    try {
        let user = await User.findOne({email});

        if (user) {
            return response.status(400).json({
                ok: false,
                msg: 'A user exists with that email'
            });
        }

        user = new User(request.body);

        await user.save();
    
        response.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Hubo un error'
        });
    }
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