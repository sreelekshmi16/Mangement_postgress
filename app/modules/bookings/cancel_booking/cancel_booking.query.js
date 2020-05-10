const {booking:Bookings, Sequelize} = require ('../../../../models');
const {tickets:Tickets} = require('../../../../models');
const Op = Sequelize.Op;
const deleteBookingQuery = async(params,transaction)=>{
let id = params.id;
console.log('quantityId',id);
// return await Bookings.update({
//     isDeleted : true
// },{
//     where:{
//         id:{
//             [Op.eq] : params.id
//         }
//     },
//     transaction
// });


};


const updateTicketCount = async(params,transaction)=>{

const ticket = await Tickets.findOne({
  where: {
    id: params.id,
},
});
console.log('current ticket row',ticket);
//    return await Tickets.update(
//     {
//         available_tickets:Sequelize.literal(`available_tickets-${ticket.quantity}`)
//       },
//       {
//         where: {
//           id: {
//             [Op.eq]: body.ticket_id
//           }
//         },transaction
//       }
// );

    };
module.exports ={deleteBookingQuery,updateTicketCount};