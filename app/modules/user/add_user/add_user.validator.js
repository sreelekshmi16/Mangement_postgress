// const validationResult = require('express-validator');
const { body } = require('express-validator');
const addUserValidator = [
    body('firstName').trim()
    .isLength({ max: 30 }).withMessage('Length not satisfied'),
    body('lastName').trim()
    .isLength({ max: 30 }).withMessage('Length not satisfied'),
    body('email').trim()
    .isEmail().withMessage('Invalid email')
];

module.exports = addUserValidator;
