const {bookings:Bookings, Sequelize} = require ('../../../../models');
const {tickets:Tickets} = require('../../../../models');

const Op = Sequelize.Op;

const findUser = async(bookingId)=>{

console.log('Id',bookingId);
 return await Bookings.findOne({
  where:{
        id:{
                [Op.eq] : bookingId
            }
        }
});
// console.log('booked user', userBooking.user_id);
};

const deleteBookingQuery = async(bookingId,transaction)=>{

  console.log('user matchedddddddddddddddddd');
return await Bookings.update({
    isDeleted : true
},{
    where:{
        id:{
            [Op.eq] : bookingId
        }
    },
    transaction
});

};

const updateTicketCount = async(bookingId,transaction)=>{
console.log('booking id', bookingId);
const ticket = await Bookings.findOne({
  attributes: ['quantity', 'ticket_id'],
  where: {
    id: bookingId,
}

});
console.log('current ticket row',ticket.quantity,ticket.ticket_id);
   return await Tickets.update(
    {
        available_tickets:Sequelize.literal(`available_tickets + ${ticket.quantity}`)
      },
      {
        where: {
          id: {
            [Op.eq]: ticket.ticket_id
          }
        },transaction
      }
);

    };
module.exports ={deleteBookingQuery,updateTicketCount,findUser};