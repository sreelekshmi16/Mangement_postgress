const { param } = require('express-validator');

const deleteTicketValidator = [param('id').notEmpty()];

module.exports = deleteTicketValidator;
