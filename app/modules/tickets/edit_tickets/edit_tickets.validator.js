const { param } = require('express-validator');

const editTicketValidator = [param('id').notEmpty()];

module.exports = editTicketValidator;
