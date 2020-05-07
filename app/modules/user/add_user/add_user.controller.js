const { addUserQuery, countEmail } = require('./add_user.query');
const { validationResult } = require('express-validator');
// const { User: Users } = require('../../../../models/index');
const bcrypt = require('bcryptjs');

const addUser = async (req, res) => {
  try {
    console.log('add userrrrrrr',req.body);
    const validation = validationResult(req);
    console.log('validation', validation);
    if (!validation.isEmpty()) {
      return res.send(validation);
    }
    const count = await countEmail(req.body.email);
    if (count) return res.send('username already exists');

    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);
    const user = await addUserQuery(req.body,password);
    return res.send({ id: user.id });
  }
  
  catch (e) {
    res.send({ status: 500, error: e });
    console.log(e.message);
  }
};
module.exports = addUser;
