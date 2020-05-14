var bcrypt = require('bcryptjs');
const HttpStatus = require('http-status-codes');
const {resetPasswordQuery,findUser} = require('./change_password.query');
const {validationResult} = require('express-validator');
const changePassword = async(req,res)=>{

try{
    const validation = validationResult(req);
    if(!validation.isEmpty())
    res.send(validation);

    var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.newPassword, salt);
console.log(password);
    const user = await findUser(req.user.id);
  console.log(user.password);
  if(!bcrypt.compareSync(req.body.password,user.password)) 
  res.send('incorrect password') ;
    const resetPassword = await resetPasswordQuery(password,req.user.id);
    console.log('reset passsword',resetPassword);
    res.status(HttpStatus.OK).send('successfully updated password');
}
catch(error){
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        error: {
          message: error.message,
          code: HttpStatus.INTERNAL_SERVER_ERROR,
        },
      });
    }
};


module.exports = changePassword;