const {response} = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (request, res = response, next) => {
    //read header x-token
    const token = request.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }

    try {
        const {uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED);

        request.uid = uid;
        request.name = name;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }

    next();
}

module.exports = {
    validateJWT
}