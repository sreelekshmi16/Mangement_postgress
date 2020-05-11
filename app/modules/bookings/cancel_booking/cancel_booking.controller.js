
const {validationResult} = require('express-validator');
const {deleteBookingQuery,updateTicketCount,findUser} = require('./cancel_booking.query');
const {authorize} = require('../../../middlewares/auth');
const {sequelize} = require('../../../../models/index');
const deleteBooking = async(req,res)=>{
  let transaction = null;
   
try{
   
    const validation = validationResult(req);
    if(!validation.isEmpty())
    return res.send(validation);

await authorize (req,res);
console.log('user in req',req.user.id);
// res.send('authenticated');
transaction = await sequelize.transaction();
const user = await findUser(req.params.id);
console.log('that user',user.user_id);
if(user.user_id !== req.user.id)
res.send('invalid user');
 
await Promise.all([  
    deleteBookingQuery(req.params.id,transaction),
    updateTicketCount(req.params.id,transaction)
]);
await transaction.commit();
return res.send('success');

}

catch(e){
await transaction.rollback();
console.log(e.message);
return res.send({ status: 400, error: e.message });
}

};
module.exports = deleteBooking;