const router = require('express').Router();
const addUser = require('./add_User/add_User controller');
const addUserValidate = require('./add_User/add_User validator');
const getUser = require('./get_User/get_User controller');
const getUserValidate = require('./get_User/get_User validator');
const removeUser = require('./remove_User/remove_User controller')
module.exports =()=>{
    console.log("api user routes")
    router.route('/api/users')
        .post(addUserValidate, addUser)
        .get(getUser)
        router.route('/api/users/:id')
        .delete(removeUser)
    return router;
}