const { validationResult } = require('express-validator');
const { addTicketsQuery } = require('./add_tickets.query');
var moment = require('moment');
const addTicket = async (req, res) => {
  console.log('add ticketsssssss');
    let{s_year,s_month,s_date,s_hour,s_min,e_hour,e_min} = req.body;
    let startTime = moment.utc({ years:s_year, months:s_month, date:s_date, hours:s_hour, minutes:s_min}).valueOf();
    console.log(startTime);
    let endTime = moment.utc({ years:s_year, months:s_month, date:s_date, hours:e_hour, minutes:e_min}).valueOf();
    console.log(endTime);
  try {
    let validation = validationResult(req);
    if (!validation.isEmpty()) return res.send(validation);
    const result = await addTicketsQuery(req,startTime,endTime);
    // const result = await addTicketQuery(req,startTime,endTime);
    return res.send(result);
  } catch (e) {
    res.send({ status: 400, error: true });
    console.log(e.message);
  }
};
module.exports = addTicket;
