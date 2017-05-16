//////////////////////////////////////////////////////////////////////
///////////////////////  NODE MODULES FOLDER DELETED  //////////////
/////////////////////////////////////////////////////////////

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'body-parser');


////////// REQUIRE MODELS/SCHEMA ///////////
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

//////////// REQUIRE ROOTS //////////
var routes_setter = require('./server/config/routes.js');
routes_setter(app);



app.listen(8000, function () { 
	console.log("Listening on port 8000");
})