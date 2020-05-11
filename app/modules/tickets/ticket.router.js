const router = require('express').Router();

const addTicket = require('../tickets/add_tickets/add_tickets.controller');
const addTicketValidator = require('../tickets/add_tickets/add_tickets.validator');
const deleteTicket = require('./delete_ticket/delete_ticket.controller');
const deleteTicketValidator = require('./delete_ticket/delete_ticket.validator');
const editTicket = require('./edit_tickets/edit_tickets.controller');
const editTicketValidator = require('./edit_tickets/edit_tickets.validator');



module.exports = () => {
    router.route('/api/tickets')
        .post(addTicketValidator, addTicket);
    router.route('/api/tickets/:id')
        .delete(deleteTicketValidator,deleteTicket)
        .put(editTicket,editTicketValidator);
    return router;
};