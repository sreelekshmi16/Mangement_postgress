const router = require('express').Router();
const addUser = require('./add_user/add_user.controller');
const addUserValidate = require('./add_user/add_user.validator');
const getUser = require('./get_user/get_user.controller');
// const getUserValidate = require('./get_User/get_user.validator');
const removeUser = require('./remove_user/remove_User controller')
module.exports =()=>{
    console.log("api user routes")
    router.route('/api/users')
        .post(addUserValidate,addUser)
        .get(getUser)
    router.route('/api/users/:id')
        .delete(removeUser)
    return router;
}