const {bookings:Bookings,Users,tickets:Tickets,Sequelize} = require('../../../../models');
const Op = Sequelize.Op;
const viewBookingQuery = async(parameters)=>{


let query ={

attributes:[['id','user_id'],'firstName'],
include: [{
    model: Bookings,
    required:true,
    attributes: [['id','booking_id']],
include:[{
    model: Tickets,
    attributes:[['id','ticket_id'],'movie_name']
}]   
    
}],
order:[[parameters.sortKey, parameters.sortOrder]]

};
if(parameters.limit) {
    query.limit = parseInt(parameters.limit);
    query.offset = parseInt(parameters.offset);
}

return Users.findAll(query);
};

module.exports = {viewBookingQuery};