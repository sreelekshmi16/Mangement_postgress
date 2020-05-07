const { bookings: Bookings } = require('../../../../models');

const editBookingQuery = async(req) => {
  const edit = await Bookings.update(
    {
      quantity: req.body.quantity
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  console.log(edit);
};

module.exports = { editBookingQuery };
