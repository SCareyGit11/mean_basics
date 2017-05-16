//
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
mongoose.connect('mongodb://localhost/mongoose_dashboard');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.

var commentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: { type: String, required: true },
}, {timestamps: true });


// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the animals from the database and include them in the view page we will be rendering.
    		// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users

  Post.find({}, function(err, animals) {
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
      console.log('successfully called an animal!');
      console.log(posts);
	     res.render('index', {posts: posts});
		}
 
	 
   
	})
})

// just an example route, your routes may look different
app.get('/posts/:id', function (req, res){
// the populate method is what grabs all of the comments using their IDs stored in the 
// comment property array of the post document!
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('post', {post: post});
        });
});

 

 //  just a sample route.  Post request to update a post.
 //  your routes will probably look different.
 app.post('/posts/:id', function (req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._post = post._id;
        // now save both to the DB
        comment.save(function(err){
                post.comments.push(comment);
                post.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          res.redirect('/');
                     }
                 });
         });
    });
 });



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})