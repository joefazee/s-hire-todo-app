require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT;

/**
 * Add middlewares
 */
app.use(bodyParser.json());


/**
 * Routes
 */

 app.get('/', (req, res) => {
    res.send({'message': 'welcome'});
 });


 /**
  * Run server
  */
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


/**
 * For the sake of testing
 */
module.exports = {app};