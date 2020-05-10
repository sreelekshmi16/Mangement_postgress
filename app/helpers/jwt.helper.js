var jwt = require('jsonwebtoken');
const config = require('../../config/config');

const generateToken=(userData,res)=>{
    console.log(userData.id);
    var token = jwt.sign({ id: userData.id ,roleId:userData.roleId}, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      return res.json({
        success: true,
        message: 'Authentication successful!',
        token: token
    });

};

const verifyToken = (req,res)=>{
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
        req.user ={
            id: decoded.id
        };
        // return req;
        res.status(200).send(decoded);
        
      }
      
    });


};



module.exports = {generateToken,verifyToken};