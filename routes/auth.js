/*
    User routes /Auth
    host + /api/auth
*/

const express = require('express');
const router = express.Router();
const {createUser, login, renewToken} = require('../controllers/auth');
const {check} = require('express-validator');
const {fieldValidator} = require('../middlewares/field-validators');
const {validateJWT} = require('../middlewares/jwt-validator');

router.post(
    '/new',
    [
        check('name', 'Name is mandatory').not().isEmpty(),
        check('email', 'Email is mandatory').isEmail(),
        check('password', 'Password is mandatory and at least 6 digits').isLength({min: 6}),
        fieldValidator
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'Email is mandatory').isEmail(),
        check('password', 'Password is mandatory and at least 6 digits').isLength({min: 6}),
        fieldValidator
    ],
    login
);

router.get('/renew', validateJWT, renewToken);

module.exports =  router;