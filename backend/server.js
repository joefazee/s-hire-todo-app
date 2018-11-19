require('./config/config');

const _ = require('lodash');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo, STATUS_COMPLETED, STATUS_PENDING} = require('./models/todo');

var app = express();
var port = process.env.PORT;

// Register Handlebars view engine
app.engine('.hbs', exphbs({ extname: '.hbs'}));
// Use Handlebars view engine
app.set('view engine', '.hbs');

/**
 * Add middlewares
 */
app.use(express.static('public'));
app.use(bodyParser.json());



/**
 * Routes
 */

 app.get('/', (req, res) => {
    res.render('index');
 });
 

 app.post('/todos', (req, res) => {
    var todo = new Todo({task: req.body.task, createdAt: new Date().getTime()});
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().sort({createdAt: -1}).then((todos) => {
        res.send({todos});
    }).catch((err) => res.status(400).send(err));

});


app.patch('/todos/toggle/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send({error: 'Id is not valid'});
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send({error: 'Todo not found'});
        }
        todo.updatedAt = new Date().getTime();

        if(todo.status === STATUS_COMPLETED) {
            todo.status = STATUS_PENDING;
        } else {
            todo.status = STATUS_COMPLETED;
        }

        return todo.save();
    }).then((todo) => {
        return res.send({todo});
    }).catch((err) => res.status(400).send());

});

app.patch('/todos/:id', (req, res) => {

    var id = req.params.id;
    var body = _.pick(req.body, ['task', 'status']);
    if(!ObjectID.isValid(id)) {
        return res.status(404).send({error: 'Id is not valid'});
    }

    //TODO: check for status

    body.updatedAt = new Date().getTime();

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        return res.send({todo});

    }).catch((err) => res.status(400).send());

});


app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;
     if(!ObjectID.isValid(id)) {
         return res.status(404).send({error: 'Id is not valid'});
     }

    Todo.findByIdAndRemove(id).then((todo) => {
            if(!todo) {
                return res.status(404).send({error: 'Todo not found'});
            }
            res.send({todo});
    }).catch((err) => res.status(400).send(err));
});

 /**
  * Run server
  */
 app.listen(port, () => {
    console.log(`Server is running on port ${port} - ${process.env.NODE_ENV}`);
});


/**
 * For the sake of testing
 */
module.exports = {app};