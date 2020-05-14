const {body} = require ('express-validator');
const {tickets:Tickets} = require('../../../../models');

const bookTicketsvalidator  = [
    body('quantity')
    .isInt().withMessage('invalid quantity'),
    body('ticket_id')
    .isInt().withMessage('invalid quantity').custom((ticket_id,{req})=>{
       return findAvailablity(ticket_id).then(tickets=>{
            if(!tickets)throw new Error ('sorry not available');
            if(!checkAvailability(req.body.quantity,tickets.available_ticket))throw new Error('insufficient quantity');
           return true;
        });
      
    }),
  
    ];


    
const findAvailablity = async(ticket_id) =>{
return await Tickets.findOne({
    attributes: ['available_tickets'],
    where:{
        id:ticket_id
    }
});

};

const checkAvailability = (quantity,avail_ticket)=>{
    if(quantity > avail_ticket)
    return true;
   else return false;
};


module.exports = bookTicketsvalidator;