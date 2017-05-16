console.log('routes');
var wordList = require('word-list-json');


var words = require('../controllers/words.js')

module.exports = function(app) {
  console.log('inside routes.js');
  app.post('/words', function(req, res){
  	words.find(req, res)});
  
}  // end of module.exports