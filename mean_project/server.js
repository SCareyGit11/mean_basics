var express  = require( 'express' ),
    bp       = require('body-parser'),
    wordList = require('word-list-json'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json());


var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.post('/words', function(req, res) {
	console.log('here');
	res.json({success: true});
})
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});