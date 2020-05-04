const {addUserQuery} = require('./add_user.query')
const {validationResult} = require('express-validator')
const {User:Users} = require('../../../../models/index')

const addUser = async(req,res)=>{
try{
const validation = validationResult(req);
console.log("validation",validation)
if(!validation.isEmpty()){
   return res.send(validation)
}


const user = await addUserQuery(req.body);
return res.send({id:user.id});
}

catch (e){
    res.send({ status: 500, error: e });
    console.log(error, e.message)
}
}
module.exports = addUser;