
const { body } = require('express-validator');
const addUserValidator = [
    body('movie_name').isString(),
    body('available_tickets')
    .isInt(),
];

module.exports = addUserValidator;
