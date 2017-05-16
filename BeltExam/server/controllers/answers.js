
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {

show : function(req, res) { Question.find({}, function(err, questions) {
   
      if(err) {
      console.log('something went wrong from database');
      }
      else { // else console.log that we did well and then redirect to the root route
      console.log('successfully loaded questions!');
      console.log(questions);
       Answer.find({}, function(err, answers) {
            if(err) {
              console.log('something went wrong from database');
             }
            else { // else console.log that we did well and then redirect to the root route
              console.log('successfully loaded comments!');
              console.log(comments);
              res.render('index', {questions: questions, answers:answers});
            }
        })  // ends Answer.find
       
    }   
  
  })
}, 


create_question : function(req, res) { 
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        
        var question = new Question({name: req.body.name, text: req.body.text});
        Question.save(function(err) {
    
    if(err) {
      console.log('error at /new');
    } 
    else { 
      console.log('successfully added a question!');

      res.json('/');
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