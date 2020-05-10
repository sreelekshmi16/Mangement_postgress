
const router = require('express').Router();

const bookTickets = require('./book_tickets/book_tickets.controller');
const bookTicketsValidation = require('./book_tickets/book_tickets.validator');
// const editBooking = require('./edit_booking/edit_booking.controller');
// const editBookingValidator = require('./edit_booking/edit_booking.validator');
// const cancelBooking = require('./cancel_booking/cancel_booking.controller');
// const cancelBookingValidator = require('./cancel_booking/cancel_booking.validator');
module.exports = () => {
    // router.route('/api/bookings')
    //     .post(bookTicketsValidation,bookTickets)
    router.route('/api/bookings/:id')
        .post(bookTicketsValidation,bookTickets);
        // .put(editBookingValidator,editBooking)
        // .delete(cancelBookingValidator,cancelBooking);
    return router;
};
