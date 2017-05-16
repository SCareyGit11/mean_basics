// require mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var friendSchema = new mongoose.Schema({
 first_name: {type: String, required: true, minlength: 4},
 last_name: {type: String, required: true, minlength: 4}
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.



mongoose.model('Friend', friendSchema);

var Friend = mongoose.model('Friend');
