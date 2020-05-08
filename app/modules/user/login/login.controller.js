const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const {findUsername} = require('../login/login.query');
const {generateToken} = require('../../../helpers/jwt.helper');
// const {Users} = require('../../../../models');

const login = async(req,res)=>{

try{
    console.log('hit login');

 const validation = validationResult(req);
 if(!validation.isEmpty()){
     res.send(validation);
 }
 const userName = await findUsername(req.body.username);
 console.log('username',userName);
 if(!userName){
     res.send('invalid username');
 }
 
 if (!bcrypt.compareSync(req.body.password, userName.password)) {
     res.send('wrong user credentials');
    // throw new Error('Wrong user credentials');
}

const token = generateToken(userName,res);

console.log('logged in',token);
}
catch(e){
console.log(e.message);

}

};

module.exports = login;