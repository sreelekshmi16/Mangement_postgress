const {Users:Users} = require('../../../../models');
const {Op} = require('sequelize');


const countEmail = async(email)=>{
    return Users.count({
        where: {
            email: {
                [Op.iLike]: email,
            }
        }
    });

};

const addUserQuery = async(body,password) => {
    return Users.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password:password,
        roleId:body.roleId
    });
    // console.log(users)
};

module.exports = {
    countEmail,
    addUserQuery
};