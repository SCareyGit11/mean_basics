
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

// Routes
// Root Request

var messages = require('../controllers/messages.js')

module.exports = function(app) {

app.get('/', function(req, res) {
	
    var message = new Message({name: req.body.name, text: req.body.text});
    messages.show(req, res);
      
})          // ends app.get('/')


app.post('/new', function(req, res) {
 	messages.create_message(req, res);
})

app.post('/comment/:id', function (req, res){
    messages.create_comment(req, res);
 });             // end post('/comment/:id')

}