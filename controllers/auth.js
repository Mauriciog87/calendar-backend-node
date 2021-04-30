const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const {generateJWT} = require('../helpers/jwt');

const createUser = async (request, response = express.response) => {
    const { email, password } = request.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return response.status(400).json({
                ok: false,
                msg: 'A user exists with that email'
            });
        }

        user = new User(request.body);

        //crypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const token = await generateJWT(user.id, user.name);

        response.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token: token
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'An error occurred'
        });
    }
}

const login = async(request, response = express.response) => {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return response.status(400).json({
                ok: false,
                msg: 'Bad password'
            });
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            return response.status(400).json({
                ok: false,
                msg: 'Password incorrect'
            });
        }

        const token = await generateJWT(user.id, user.name);

        response.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token: token
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'An error occurred'
        });
    }
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