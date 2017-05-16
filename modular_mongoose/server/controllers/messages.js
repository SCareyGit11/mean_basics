
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {

show : function(req, res) { Message.find({}, function(err, messages) {
   
    	if(err) {
      console.log('something went wrong from database');
      }
    	else { // else console.log that we did well and then redirect to the root route
      console.log('successfully loaded messages!');
      console.log(messages);
	     Comment.find({}, function(err, comments) {
            if(err) {
              console.log('something went wrong from database');
             }
            else { // else console.log that we did well and then redirect to the root route
              console.log('successfully loaded comments!');
              console.log(comments);
              res.render('index', {messages: messages, comments: comments});
            }
        })  // ends Comment.find
       
		}   
	
  })
}, 


create_message : function(req, res) { 
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        
        var message = new Message({name: req.body.name, text: req.body.text});
        message.save(function(err) {
    
    if(err) {
      console.log('error at /new');
    } 
    else { 
      console.log('successfully added a message!');

      res.redirect('/');
    }
  })
},


    

create_comment : function(req, res) {
   Message.findOne({_id: req.params.id}, function(err, message){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._message = message._id;
        // now save both to the DB
        if(err) {console.log('err1');}
        else {
        comment.save(function(err){
          
                message.comments.push(comment);
                message.save(function(err){
                     if(err) {
                          console.log('err at new comment')
                     } 
                     else {
                          console.log('successfully loaded comments!');
                          console.log(comment);
                          res.redirect('/');
                     }
              }) // end message.save
               
            });  // end comment.save
        }        // end else
         
    })
  } 

}