var mongoose = require('mongoose');

// Configure and Connect Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {  mongoose};