const {bookings:Bookings,Users,tickets:Tickets,Sequelize} = require('../../../../models/index');
const Op = Sequelize.Op;

const viewBookingQuery = async(userId)=>{
    console.log('booking',Bookings);
   
    return await Users.findOne({
        attributes: ['id', 'firstName', 'lastName'],
        where: {
            id: {
                [Op.eq]: userId
            }
        },
        include: [{
            model:Bookings,
        //    required:false,
            attributes: ['user_id', 'ticket_id', 'quantity'],
            include: [{
                model: Tickets,
              
                attributes: ['movie_name']
            }]
        }]
    });

   
};

module.exports = {viewBookingQuery};