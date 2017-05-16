var mongoose = require('mongoose');
var Name = mongoose.model('Name');



module.exports = {
	show : function	(req, res) {
		Name.find({}, function(err, names) {
   
    	if(err) {
      console.log('something went wrong from database');
        }
    	else { // else console.log that we did well and then redirect to the root route
      		console.log('successfully loaded names!');
      		console.log(names);
            res.json({names : names});
            }
        })   // ends name.find 
	
  	},		// ends show:
	
	new : function (req, res) {
		var name = new Name({name: req.params.name});
		name.save(function(err) {
    	
    	if(err) {
      	console.log('save error');
    	} 
    	else { // else console.log that we did well and then redirect to the root route
      	console.log('successfully added'+req.params.name);

	    res.redirect('/');
		}
	  })
	},	
	remove : function (req, res) {
    Name.remove({name: req.params.name}, function(err){
      if(err) {
        console.log('remove-err');
      }
      else{
        console.log('successfully deleted'+req.params.name);
        res.redirect('/');
      }
    })
  },
	one : function (req, res) {
    Name.find({name: req.params.name}, function(err, name){
      if(err) {
        console.log('get-err');
      }
      else{
        console.log('successfully got'+req.params.name);
        res.json({name: name});
      }
    })
  }
}