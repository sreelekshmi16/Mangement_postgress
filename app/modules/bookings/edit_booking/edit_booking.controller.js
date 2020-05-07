const {validationResult} = require ('express-validator');
const {editBookingQuery} = require('./edit_booking.query');

const editBooking = async(req,res)=>{

    try{

        const validation = validationResult(req);
        if(!validation.isEmpty())
        return res.send(validation);

        const edit = await editBookingQuery(req);
        return res.send(edit);
    }
    catch(e){
        res.send({ status: 400, error: true });
        console.log(e.message);
    }


};
module.exports = {editBooking};