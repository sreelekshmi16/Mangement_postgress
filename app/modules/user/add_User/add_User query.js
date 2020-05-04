const {User:Users} = require('../../../../models')

const addUserQuery = async(body) => {
    return  Users.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
    });
}

module.exports={
    addUserQuery
}