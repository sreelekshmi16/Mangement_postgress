const {body} = require ('express-validator');
const {tickets:Tickets} = require('../../../../models');

const bookTicketsvalidator  = [
    
    body('quantity')
    .isInt()
];

// const findAvailablity = async(ticket_id) =>{
// return await Tickets.findOne({
//     attributes: ['available_tickets'],
//     where:{
//         id:ticket_id
//     }
// });

// };

// const checkAvailability = (avail_ticket,quantity)=>{
//     if(quantity < avail_ticket)
//     return true;
// };


module.exports = bookTicketsvalidator;