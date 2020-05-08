const {
  bookings: Bookings,
  tickets: Tickets,
  Sequelize
} = require('../../../../models');

const Op = Sequelize.Op;
const bookTicketsQuery = async (req,transaction) => {
  const {ticket_id, quantity } = req.body;
  const user_id = req.params.id;
  console.log('userrrrr',user_id);
  let booking = {
    user_id,
    ticket_id,
    quantity,
    isDeleted: req.body.isDeleted ? req.body.isDeleted : false
  };
  console.log(booking);

  const bookTickets = await Bookings.create(booking,{transaction});
  console.log(bookTickets);
};
const decrementTicketCount = async (body,transaction) => {
  const ticket = await Tickets.update(
    {
      available_tickets:Sequelize.literal(`available_tickets-${body.quantity}`)
    },
    {
      where: {
        id: {
          [Op.eq]: body.ticket_id
        }
      },transaction
    }
  );
  console.log('updated ticket count', ticket);

};

module.exports = { bookTicketsQuery, decrementTicketCount };
