const {getUserQuery} = require('./get_user.query');
// const {validationResult} = require('express-validator');
// const {User:Users} = require('../../../../models/index');

const getUser = async(req,res)=>{


    try{
        console.log('get user');
     const user = await getUserQuery();
        return res.send(user);
    }
    catch(e){
        console.log('error',e.message);
      return res.send({ status: 500, error: e });
       
        
    }
};
module.exports = getUser;