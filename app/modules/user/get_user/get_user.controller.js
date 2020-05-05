const {getUserQuery} = require('./get_user.query')
const {validationResult} = require('express-validator');
const {User:Users} = require('../../../../models/index');

const getUser = async(req,res)=>{


    try{
        
     const user = await getUserQuery();
        return res.send(user)
    }
    catch(e){
        res.send({ status: 500, error: e });
        console.log("error",e.message)
        
    }
}
module.exports = getUser;