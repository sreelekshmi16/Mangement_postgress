
const router = require('express').Router();
const {authorize} = require('../../middlewares/auth');
const bookTickets = require('./book_tickets/book_tickets.controller');
const bookTicketsValidation = require('./book_tickets/book_tickets.validator');
// const editBooking = require('./edit_booking/edit_booking.controller');
// const editBookingValidator = require('./edit_booking/edit_booking.validator');
const cancelBooking = require('./cancel_booking/cancel_booking.controller');
const cancelBookingValidator = require('./cancel_booking/cancel_booking.validator');
const viewBooking = require('./view_bookings/view_bookings.controller');
const viewBookingValidator = require('./view_bookings/view_bookings.validator');
module.exports = () => {
    router.route('/api/bookings')
            .get(viewBookingValidator,viewBooking);
    //     .post(bookTicketsValidation,bookTickets)
    router.route('/api/bookings/:id')
        .post(bookTicketsValidation,bookTickets)
        // .put(editBookingValidator,editBooking)
        .delete(authorize,cancelBookingValidator,cancelBooking);
    return router;
};
