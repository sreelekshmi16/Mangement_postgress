const { validationResult } = require('express-validator');
const {
  bookTicketsQuery,
  decrementTicketCount
} = require('./book_tickets.query');

const { sequelize } = require('../../../../models/index');
const bookTickets = async (req, res) => {
  let transaction = null;
  try {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      return res.send(validation);
    }
    transaction = await sequelize.transaction();
    await Promise.all([
      bookTicketsQuery(req, transaction),
      decrementTicketCount(req.body, transaction)
    ]);
    await transaction.commit();
    return res.send('booking created');
  } catch (e) {
    await transaction.rollback();
    console.log(e.message);
    return res.send({ status: 400, error: true });
  }
};
module.exports = bookTickets;
