console.log('routes');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

var friends = require('../controllers/friends.js')

module.exports = function(app) {
  app.get('/friends', friends.index(req, res));
  app.get('/friends/:id', friends.show(req, res));
  app.post('/friends', friends.create(req, res));
  app.put('/friends/:id', friends.update(req, res));
  app.delete('/friends/:id', friends.delete(req, res));
}  // end of module.exports