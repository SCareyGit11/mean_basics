//////////////////////////////////////////////////////////////////////////////////////
//////NODE MODULES WOULD NEED TO BE REINSTALLED //////////////////////////////////
/////////////////////////////////////////////////////
var express = require('express');
// Create an Express App
var app = express();

var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- 
mongoose.connect('mongodb://localhost/mongoose_messageBoard');
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


// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the animals from the database and include them in the view page we will be rendering.
    		// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users

  Message.find({}, function(err, messages) {
    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous 
    // Make sure you handle the case when there is an error, as well as the case when there is no error
    	if(err) {
      console.log('something went wrong from database');
      }
    	else { // else console.log that we did well and then redirect to the root route
      console.log('successfully loaded messages!');
      console.log(messages);
	     Comment.find({}, function(err, comments) {
            if(err) {
              console.log('something went wrong from database');
             }
            else { // else console.log that we did well and then redirect to the root route
              console.log('successfully loaded comments!');
              console.log(comments);
              res.render('index', {messages: messages, comments: comments});
            }
        })  // ends Comment.find
       
		}
 
	 
   
	
  })        // ends Message.find
})          // ends app.get('/')

app.post('/new', function(req, res) {
  console.log("POST DATA", req.body);
  mongoose.Promise = global.Promise;
    var message = new Message({name: req.body.name, text: req.body.text});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        message.save(function(err) {
    
    if(err) {
      console.log('error at /new');
    } 
    else { 
      console.log('successfully added a message!');

      res.redirect('/');
    }
  })
})

app.post('/comment/:id', function (req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._message = message._id;
        // now save both to the DB
        if(err) {console.log('err1');}
        else {
        comment.save(function(err){
          
                message.comments.push(comment);
                message.save(function(err){
                     if(err) {
                          console.log('err at new comment')
                     } 
                     else {
                          console.log('successfully loaded comments!');
                          console.log(comment);
                          res.redirect('/');
                     }
              }) // end message.save
               
            });  // end comment.save
        }        // end else
         
    });          // end Message.findOne
 });             // end post('/comment/:id')


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})