const {validationResult} = require ('express-validator');
const {editTicketQuery,findTicket} = require('./edit_tickets.query');
const {authorize} = require('../../../middlewares/auth');

const editTicket = async(req,res)=>{
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

const editTicket = editTicketQuery(req.params.id,req.body.quantity);
if(editTicket)
res.send('success');

};

module.exports = editTicket;