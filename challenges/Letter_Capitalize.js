function LetterCapitalize(string) { 

  // code goes here  
  var array = [];
  string = string.split(' ');

  for (var i=0; i < string.length; i++) {
    array.push( string[i].charAt(0).toUpperCase() + string[i].substr(1, string[i].length) );
  }

  return array.join(' '); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());