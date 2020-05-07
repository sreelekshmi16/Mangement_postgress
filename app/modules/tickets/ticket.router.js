const router = require('express').Router();

const addTicket = require('../tickets/add_tickets/add_tickets.controller');
const addTicketValidator = require('../tickets/add_tickets/add_tickets.validator');


module.exports = () => {
    router.route('/api/tickets')
        .post(addTicketValidator, addTicket);

    return router;
};