function PalindromeTwo(str) {
  var reg = /[a-zA-z]/g;
  str = str.toLowerCase().match(reg);
  return (str.join('') == str.reverse().join(''));
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());