const { Users, Sequelize } = require('../../../../models');
const Op = Sequelize.Op;

const findUser = async userId => {
  return Users.findOne({
    where: {
      id: {
        [Op.eq]: userId
      }
    }
  });
};

const resetPasswordQuery = async(password,userId)=>{
return Users.update({
    password:password
},{
    where:{
        id:{
            [Op.eq]:userId
        }
    }
});

};



module.exports = {findUser,resetPasswordQuery};