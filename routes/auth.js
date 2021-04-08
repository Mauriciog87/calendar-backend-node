/*
    User routes /Auth
    host + /api/auth
*/

const express = require('express');
const router = express.Router();
const {createUser, login, renewToken} = require('../controllers/auth');

router.post('/new', createUser);

router.post('/', login);

router.get('/renew', renewToken);

module.exports =  router;