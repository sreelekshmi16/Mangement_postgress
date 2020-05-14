const {viewBookingQuery} = require('./view_bookings.query');
const HttpStatus = require('http-status-codes');
const viewBookings = async(req,res)=>{


try{
console.log('view booing hit');
let parameter = {
    limit: req.query.limit || 10,
    // page: req.query.page || 1,
    sortKey: req.query.sortKey || 'firstName',
    sortOrder: req.query.sortOrder || 'asc',
    offset: req.query.page > 1 ? req.query.page * (req.query.limit - 1) : 0
  };

const viewBooking = await viewBookingQuery(parameter);
res.status(HttpStatus.OK).send(viewBooking);
// res.send(viewBooking);

}
catch(error){
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        error: {
          message: error.message,
          code: HttpStatus.INTERNAL_SERVER_ERROR,
        },
      });
// res.send(e.message);
}

};
module.exports = viewBookings;