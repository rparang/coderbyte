function FirstReverse(string) { 

  // code goes here  
  string = string.split('');
  var array = [];

  for (var i=string.length-1; i>-1; i--) {
    array.push(string[i]);
  }
         
  return array.join('');
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());