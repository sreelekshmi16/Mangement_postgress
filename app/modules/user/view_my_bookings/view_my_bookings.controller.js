 
const { viewBookingQuery } = require('./view_my_bookings.query');
const { validationResult } = require('express-validator');
const viewMyBooking = async(req, res) => {
    try {

        console.log('view booking hit');
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);
        const result = await viewBookingQuery(req.params.id);

        if (!result)
            return res.send('No bookings found');

        return res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};
module.exports = viewMyBooking;