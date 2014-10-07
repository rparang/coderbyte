// NumberSearch finds all numbers in a string, adds them, and divides by the total letters
// in the string

function NumberSearch(str) { 

  var num_match = str.match(/\d/g); //Match all numbers in the string
  var str_match = str.match(/[a-z]/ig); //Match all letters

  if (num_match == null) { return 0; } //Return 0 if no numbers

  var total = num_match.reduce(function(a,b) { return parseInt(a)+parseInt(b); }) //Add the array from our number match

  return Math.round(total / str_match.length); //Return the total divided by the number of letters, rounded
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberSearch(readline());