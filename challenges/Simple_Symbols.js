function SimpleSymbols(string) { 

  var reg_letters = /[a-z]/g;
  var reg_surround = /\+[a-z]\+/g;

  var first = (string.match(reg_letters) != null) ? string.match(reg_letters).length : 0;
  var second = (string.match(reg_surround) != null) ? string.match(reg_surround).length : 0;
  console.log(first);
  console.log(second);
  if (first == second) {
    return true;
  }
  else {
    return false;
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());