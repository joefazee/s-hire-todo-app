require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');

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

 app.post('/todos', (req, res) => {
     console.log(req.body);
    var todo = new Todo({task: req.body.task});
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
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