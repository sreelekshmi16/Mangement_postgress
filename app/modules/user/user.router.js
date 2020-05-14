const router = require('express').Router();
const addUser = require('./add_user/add_user.controller');
const addUserValidate = require('./add_user/add_user.validator');
const getUser = require('./get_user/get_user.controller');
// const getUserValidate = require('./get_User/get_user.validator');
const removeUser = require('./remove_user/remove_User controller');
const loginUser = require('./login/login.controller');
const loginUserValidator = require('./login/login.validator');
const {authorize,isAdmin,isManger,isCustomer} = require('../../middlewares/auth');
const viewMyBooking = require('./view_my_bookings/view_my_bookings.controller');
const viewMyBookingValidator = require('./view_my_bookings/view_my_bookings.validator');
const resetPassword = require('./change_password/change_password.controller');
const resetPasswordValidator = require('./change_password/change_password.validator');

module.exports =()=>{
    console.log('api user routes');
    router.route('/api/users')
        .post(addUserValidate,addUser)
        .get(getUser);
    router.route('/api/users/:id')
        .delete([authorize,isAdmin],removeUser);
    router.route('/api/users/login')
        .post(loginUserValidator,loginUser);
    router.route('/api/users/:id/bookings')
        .get(viewMyBookingValidator,viewMyBooking);
    router.route('/api/users/resetpassword')
        .put(authorize,resetPasswordValidator,resetPassword);
    
    return router;
};