var mongoose = require('mongoose');

const STATUS_PENDING  = 'pending';
const STATUS_COMPLETED = 'completed';


var TodoScheme = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true
    },
    updatedAt: {
        type: Number,
        default: null
    },
    createdAt: {
        type: Number,
        default: null
    },
    status: {
        type: String,
        default: STATUS_PENDING
    }
});

var Todo = mongoose.model('Todo', TodoScheme);

module.exports = {Todo};