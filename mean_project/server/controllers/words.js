console.log('words controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
var wordList = require('../../node_modules/word-list-json/index.js');
// Build out the methods in the friendsControllers below
function WordsController(){
  
  this.find = function(req,res){
    //your code here
    console.log("req.body "+req.body);
    // wordList.findOne(req.body, function(err, word){
    //   if(err) {
    //     console.log('find-err');
    //   }
    //   else {
    //     console.log('found'+word);
    //    }
    // });  // end of .findOne

    // Go through word.words and if req.body is found then return true or the word?
    for (i=0; i< wordList.length; i++) {
      if (req.body == wordList[i]){
        word = true
        return word
      }
      word = false
      return word
    }


    res.json(word);
  };
    
  
}
module.exports = new WordsController(); // what does this export?