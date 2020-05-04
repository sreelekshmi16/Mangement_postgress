const router = require('express').Router();
const addUser = require('./add_User/add_user.controller');
const addUserValidate = require('./add_User/add_user.validator');
const getUser = require('./get_User/get_user.controller');
// const getUserValidate = require('./get_User/get_user.validator');
const removeUser = require('./remove_User/remove_User controller')
module.exports =()=>{
    console.log("api user routes")
    router.route('/api/users')
        .post(addUser,addUserValidate)
        .get(getUser)
    router.route('/api/users/:id')
        .delete(removeUser)
    return router;
}