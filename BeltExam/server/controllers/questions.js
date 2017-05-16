console.log('questions back end controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
var mongoose = require('mongoose');
var Question = mongoose.model('Question'); 

function QuestionsController(){
  this.index = function(req,res){
    //your code here
    Question.find({}, function(err, data){
      if(err) {
        console.log('err-index')
      }
      else{
        console.log('successfully loaded questions');
        console.log(data)
      }
      res.json(data);
    })  
    
  };  // end of this.index

  this.create = function(req,res){
    //your code here
    console.log(req.body);
    Question.create({question: req.body}, function(err, result){
      if(err){
        console.log('create-err')
      }
      else{
        res.json(result);
      }
    })
  }  // end of this.create
}  // end of QuestionsController

module.exports = new QuestionsController();