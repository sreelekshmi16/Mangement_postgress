
const {param} = require('express-validator');

const cancelBookingValidator = [
    param('id').isInt()];

module.exports = cancelBookingValidator;