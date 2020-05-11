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


const editTicketQuery = async(id,quantity)=>{

console.log('edit ticket hit');
   
return await Tickets.update({
    available_tickets : quantity
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
module.exports = {editTicketQuery,findTicket};