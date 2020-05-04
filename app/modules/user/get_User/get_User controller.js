const {getUserQuery} = require('./get_User query')
const {validationResult} = require('express-validator');
const {User:Users} = require('../../../../models/index');

const getUser = async(req,res)=>{
   
// const users = await Users.findAll();
// return res.send(users)

    // Users.findAll()
    // .then( userResponse => {
    //   res.status( 200 ).json( userResponse )
    // } )
    // .catch( error => {
    //   res.status( 400 ).send( error )
    // } )
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