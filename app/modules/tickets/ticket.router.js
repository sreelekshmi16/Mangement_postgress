const router = require('express').Router();

const addTicket = require('../tickets/add_tickets/add_tickets.controller');
const addTicketValidator = require('../tickets/add_tickets/add_tickets.validator');
const deleteTicket = require('./delete_ticket/delete_ticket.controller');
const deleteTicketValidator = require('./delete_ticket/delete_ticket.validator');
const editTicket = require('./edit_tickets/edit_tickets.controller');
const editTicketValidator = require('./edit_tickets/edit_tickets.validator');
const {authorize} = require('../../middlewares/auth');


module.exports = () => {
    router.route('/api/tickets')
        .post(authorize,addTicketValidator, addTicket);
    router.route('/api/tickets/:id')
        .delete(authorize,deleteTicketValidator,deleteTicket)
        .put(authorize,editTicket,editTicketValidator);
    return router;
};