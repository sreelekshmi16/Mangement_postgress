const { query } = require('express-validator');
const viewBookingsValidator = [

    query('sortKey').trim()
    .isIn(['firstName', 'lastName']).withMessage('Invalid sort key'),
    query('sortOrder').trim()
    .isIn(['DESC', 'ASC']).withMessage('Invalid sort order')

];
module.exports = viewBookingsValidator;