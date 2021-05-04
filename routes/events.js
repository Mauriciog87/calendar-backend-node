/*
    /api/events
*/

const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const {validateJWT} = require('../middlewares/jwt-validator');
const {fieldValidator} = require('../middlewares/field-validators');
const {getEvents, createEvents, updateEvents, deleteEvents} = require('../controllers/events');
const {isDate} = require('../helpers/isDate');

router.use(validateJWT);

router.get('/', getEvents);

router.post(
    '/',
    [
        check('title', 'Title is mandatory').not().isEmpty(),
        check('start', 'Start date is mandatory').custom(isDate),
        check('end', 'End date is mandatory').custom(isDate),
        fieldValidator
    ],
    createEvents);

router.put('/:id', updateEvents);

router.delete('/:id', deleteEvents);

module.exports = router;