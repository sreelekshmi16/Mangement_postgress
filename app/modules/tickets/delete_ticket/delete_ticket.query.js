const {tickets:Tickets} = require('../../../../models');
const {Sequelize} = require('../../../../models/index');
const Op = Sequelize.Op;

const findTicket = async(ticket_id)=>{
    return await Tickets.findOne({
        where :{
            id:{
                [Op.eq]:ticket_id
            }
        }
    });
};


const deleteTicketQuery = async(id)=>{

console.log('delete ticket hit');

return await Tickets.update({
    IsDeleted : true
},
    {
    
        where:{
            id:{
                [Op.eq]: id 
            }
        }
    
    }
);



};
module.exports = {deleteTicketQuery,findTicket};