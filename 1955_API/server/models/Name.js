var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var nameSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 4},
}, { timestamps: true });

mongoose.model('Name', nameSchema);
var Name = mongoose.model('Name');