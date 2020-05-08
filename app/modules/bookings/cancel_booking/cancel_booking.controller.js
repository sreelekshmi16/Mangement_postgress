
const {validationResult} = require('express-validator');
const {deleteBookingQuery,updateTicketCount} = require('./cancel_booking.query');
const {sequelize} = require('../../../../models/index');
const deleteBooking = async(req,res)=>{

try{
    let transaction = null;
    transaction = sequelize.transaction();
    const validation = validationResult(req);
    if(!validation.isEmpty())
    return res.send(validation);

await Promise.all([  
     deleteBookingQuery(req.params,transaction),
      updateTicketCount(req.params,transaction)
]);
  res.send('success');

}

catch(e){
console.log(e.message);
}

};
module.exports = deleteBooking;