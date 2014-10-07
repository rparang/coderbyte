function Palindrome(str) { 

  var treated = str.toLowerCase().split(' ').join('').split('').join('');
  var treated_reversed = str.toLowerCase().split(' ').join('').split('').reverse().join('');
  return (treated == treated_reversed);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());