var _ = {
   map: function(arr, callback) {
     //code here;
     var newArray = [];
     for (var i = 0; i < arr.length; i++) {
      newArray.push(callback(arr[i]))
     }

     return newArray;
   },
   reduce: function(arr, callback, context) { 
     // code here;
     var newArray = arr;
     while ( newArray.length > context + 1) {
      newArray[newArray.length-2] = callback(newArray[newArray.length-2], newArray[newArray.length-1]);
      newArray.pop();    //take the last two elements in the list, perform the function, set the second to last equal to the function and then pop
    }
      return newArray[context];
     
   },
   find: function(arr, callback) {   
     // code here;
     for (var i = 0; i < arr.length; i ++) {
      if ( callback(arr[i]) == true) {
        return arr[i];
      }
    }
   },
   filter: function(arr, callback) { 
     // code here;

     var newArray = [];
     for (var i = 0; i < arr.length; i ++) {
      if ( callback(arr[i]) == true) {
        newArray.push(arr[i]);
      }
     }
     return newArray;
   },
   reject: function(arr, callback) { 
     // code here;

     var newArray = [];
     for (var i = 0; i < arr.length; i ++) {
      if ( callback(arr[i]) == false) {
        newArray.push(arr[i]);
      }
     }
     return newArray;
   }
 }


