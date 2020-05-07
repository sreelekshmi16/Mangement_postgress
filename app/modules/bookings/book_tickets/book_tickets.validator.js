const {body} = require ('express-validator');

const bookTicketsvalidator  = [
    
    body('quantity')
    .isInt(),
];

module.exports = bookTicketsvalidator;