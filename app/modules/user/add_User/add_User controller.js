const {addUserQuery} = require('./add_User query')
const {validationResult} = require('express-validator')
const {User:Users} = require('../../../../models/index')

const addUser = async(req,res)=>{
try{
const validation = validationResult(req);
if(!validation.isEmpty()){
   return res.send(validation)
}

// Users.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email
//     })
//     .then( userResponse => {
//       res.status( 200 ).send({id:Users.id});
//     } )
//     .catch( error => {
//       res.status( 400 ).send( error )
//       console.log("error",error.message)
//     } )
const user = await addUserQuery(req.body);
return res.send({id:user.id});
}

catch (e){
    res.send({ status: 500, error: e });
    console.log(error, e.message)
}
}
module.exports = addUser;