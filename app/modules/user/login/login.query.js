const {Users} = require('../../../../models/index');


const findUsername = async(username)=>{

return await Users.findOne({
    where: {
        email: username
    }
});
// console.log('username in query',userName);



};

module.exports = {findUsername};