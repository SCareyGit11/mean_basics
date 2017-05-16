// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
// note that we're now storing our app.listen within
// a variable called server. this is important!!
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
// this is a new line we're adding AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, this line will not work!!
var io = require('socket.io').listen(server);

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  // If you don't know where this code is supposed to go reread the above info 

	socket.on("posting_form", function (data){
	    
	    console.log('Someone submitted the form!  Form Data: ' + data.name);
	    
	    socket.emit("updated_message", {response: data});
	    var random_number = Math.floor(Math.random() * 1000 + 1);
	    socket.emit("random_number", {response: random_number});
	});

})

////  this is just the configuration code that we've already used
//io.sockets.on('connection', function (socket) {
  //  //  EMIT:
    //socket.emit('my_emit_event');
    ////  BROADCAST:
    //socket.broadcast.emit("my_broadcast_event");
    ////  FULL BROADCAST:
    //io.emit("my_full_broadcast_event");
//})
