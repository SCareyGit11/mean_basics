console.log('routes');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js')

module.exports = function(app) {
  app.get('/questions', function(req, res){questions.index(req, res)});
  app.get('/questions/:id', function(req, res){questions.show(req, res)});
  app.post('/questions', function(req, res){questions.create(req, res)});
  

  app.get('/answers', function(req, res){answers.index(req, res)});
  app.get('/answers/:id', function(req, res){answers.show(req, res)});
  app.post('/answers', function(req, res){answers.create(req, res)});
  
}  // end of module.exports