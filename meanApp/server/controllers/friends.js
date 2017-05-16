console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({}, function(err, data){
      if(err) {
        console.log('err-index')
      }
      else{
        console.log('successfully loaded friends');
        console.log(data)
      }
      res.json(data);
    })  // end of Friend.find
    
  };
  this.create = function(req,res){
    //your code here
    console.log(req.body);
    Friend.create(req.body, function(err, result){
      if(err){
        console.log('create-err')
      }
      else{
        res.json(result);
      }
    })

    // var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name});
    // console.log(friend);
    // friend.save(function(err) {
      
    //   if(err) {
    //     console.log('save error');
    //   } 
    //   else { // else console.log that we did well and then redirect to the root route
        
    //     console.log('successfully added'+req.body.friend);
    //   }
    // }); // end of friend.save
    // res.json();
  };
  this.update = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err) {
        console.log('update/find-err');
      }
      else {
        console.log('found'+friend+'to update');
        friend = ({_id: req.params.id, first_name: req.body.first_name, last_name: req.body.last_name});
      }
    });  // end of Friend.find
    res.redirect('/friends');
  };
    
  this.delete = function(req,res){
    //your code here
    Friend.remove({_id: req.params.id}, function(err){      
      if(err) {
        console.log('remove-err');
      }
      else{
        console.log('successfully deleted'+req.params.id);
      }
    });  // end of Friend.remove
    res.redirect('/friends');
  };
  
  this.show = function(req,res){
    //your code here
    Friend.find({_id: req.params.id}, function(err, data){
      if(err){
        console.log('show/find-err');
      }
      else{
        console.log(data)
      }
      res.json(data);
    }); // end of Friend.find

    
  };
}
module.exports = new FriendsController(); // what does this export?