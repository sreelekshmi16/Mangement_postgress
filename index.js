const express = require('express');
const app = express();
app.use(express.json());

require('./router')(app)
const dotenv = require('dotenv')

const config = dotenv.config();
if (config.error)
    throw config.error;

// const config = require('./config/config')
    
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

global.__base = `${__dirname}/`;