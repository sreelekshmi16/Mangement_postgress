const {Users:Users} = require('../../../../models/index');

const getUserQuery = async(req)=>{
   
  return await Users.findAll();
}

module.exports = {getUserQuery};