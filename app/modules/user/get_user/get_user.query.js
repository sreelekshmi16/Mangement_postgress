const {Users:Users} = require('../../../../models/index');

const getUserQuery = async()=>{
   
  return await Users.findAll();
};

module.exports = {getUserQuery};