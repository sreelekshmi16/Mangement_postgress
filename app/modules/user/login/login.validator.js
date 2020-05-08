const { body } = require('express-validator');
const loginValidation = [
    body('username')
    .isEmail(),
    body('password')
    .notEmpty()
];

module.exports = loginValidation;
