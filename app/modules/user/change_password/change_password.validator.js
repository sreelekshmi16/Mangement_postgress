const {body} = require('express-validator');
const passwordValidator = [body('newPassword').notEmpty(),
body('password').notEmpty()];

module.exports = passwordValidator;