var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- 
mongoose.connect('mongodb://localhost/beltExam');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 4},
  
 answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.

var questionSchema = new mongoose.Schema({

	text: {type: String, required: true, minlength: 10},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	description: {type: String, required: false},
	count: {type: Number, required: false}
}, { timestamps: true});	


var answerSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _user: {type: Schema.Types.ObjectId, ref: 'User'},
 _question: {type: Schema.Types.ObjectId, ref: 'Question'},
 text: { type: String, required: true, minlength: 5},
 details: {type: String, required: false},
 likes: { type: Number, required: false, }
}, {timestamps: true });

mongoose.model('User', userSchema);
mongoose.model('Question', questionSchema);
mongoose.model('Answer', answerSchema);
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');