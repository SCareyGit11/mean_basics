
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Name = mongoose.model('Name');

var names = require('../controllers/name.js');

module.exports = function(app) {
	app.get('/', function (req, res) {
		names.show(req, res);
	})
	app.get('/new/:name', function(req, res) {
		names.new(req, res);
	})
	app.get('/remove/:name', function(req, res) {
		names.remove(req, res);
	})
	app.get('/:name', function(req, res) {
		names.one(req, res);
	})

}