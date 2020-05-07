const { tickets: Tickets } = require('../../../../models');

const addTicketsQuery = async (req,startTime,endTime) => {
  const newTicket = await Tickets.create({
    movie_name: req.body.movie_name,
    available_tickets: req.body.available_tickets,
    startTime: startTime,
    endTime: endTime
  });
  console.log(newTicket);
  // return newTicket.save();
};
module.exports = {addTicketsQuery};
