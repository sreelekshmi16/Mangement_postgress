const {validationResult} = require ('express-validator');
const {deleteTicketQuery,findTicket} = require('./delete_ticket.query');
const {authorize} = require('../../../middlewares/auth');
// const {sequelize} = require('../../../../models/index');

const deleteTicket = async(req,res)=>{
console.log('dlt ticket hit');
const validation = validationResult(req);

if(!validation.isEmpty())
return res.send(validation);

await authorize (req,res);
console.log('req user object',req.user.id);

const ticket = await findTicket(req.params.id);
console.log('user ticket',ticket.CreatedBy_Id);

if(req.user.id !== ticket.CreatedBy_Id)
res.send('invalid user');

const dltTicket = deleteTicketQuery(req.params.id);
if(dltTicket)
res.send('succesfully deleted');

};

module.exports = deleteTicket;