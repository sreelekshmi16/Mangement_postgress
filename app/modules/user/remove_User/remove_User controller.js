const {User:Users} = require('../../../../models/index');

const removeUser = async(req,res)=>{
try{
const id = req.params.id;
const user = await Users.destroy({
    where:{id:id}
})
res.send(user);
}
catch(e){
    res.status( 400 ).send( error )
    console.log("error",error.message)
}
}
module.exports = removeUser;