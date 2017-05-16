// require mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 4},
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.

var commentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _message: {type: Schema.Types.ObjectId, ref: 'Message'},
 text: { type: String, required: true },
}, {timestamps: true });

mongoose.model('Message', messageSchema);
mongoose.model('Comment', commentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');