const jwt = require ('jsonwebtoken');
const config = require('../../config/config');
// const {Users} = require('../../models/index');
const authorize = (req,res,next)=>{
    console.log('authorize hit');
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    try{
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      req.user = decoded;
      console.log('req user object',req.user);
      next();
    });
 
    }
    catch(e){
        console.log('error token',e.message);
            // res.status(400).send('invalid token');
    }
  

};

const isAdmin = (req,res,next) =>{
    console.log('isAdmin hit');
    if(req.user.roleId !== 1)return res.status(403).send('Access denied!!!!');
    next();
};

const isManger = (req,res,next)=>{
    console.log('isManger hit',req.user.roleId);
    if(req.user.roleId !== 2)return res.status(403).send('Access denied!!!!');
    next();
};
const isCustomer = (req,res,next)=>{
    console.log('isCustomer hit');
    if(req.user.roleId !== 3)return res.status(403).send('Access denied!!!!');
    next();
};




module.exports = {authorize,isAdmin,isManger,isCustomer};