const {User:Users} = require('../../../../models/index');

const getUserQuery = async(req)=>{
   
  return await Users.findAll();
//   console.log( getUserQuery.every(user => user instanceof Users));
}

module.exports = {getUserQuery};