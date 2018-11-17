const {ObjectID} = require('mongodb');
const {Todo, STATUS_COMPLETED} = require('../../models/todo');

const todo1ID = new ObjectID();
const todo2ID = new ObjectID();
const todo3ID = new ObjectID();

const todos = [
    {
        _id: todo1ID,
        task: 'Clean the house on Saturday morning',
    },
    {
        _id: todo2ID,
        task: 'Read the Gods are not to blame',
        updatedAt: 12345,
        createdAt: 12345,
        status: STATUS_COMPLETED

    },
    {
        _id: todo3ID,
        task: 'This todo is updated',
        updatedAt: 12345
    }
];

const makeTodos = (done) => {
    Todo.remove({}).then(() => {
        var todo1 = new Todo(todos[0]).save();
        var todo2 = new Todo(todos[1]).save();
        var todo3 = new Todo(todos[2]).save();
        return Promise.all([todo1, todo2, todo3]);
    }).then(() => done());
};

module.exports = {todos, makeTodos};