// TripleDouble finds a digit repeated three times in the first paramer, and returns 1 if the same digit is then
// found in the second parameter

function TripleDouble(num1,num2) { 

  var reg1 = /(\w)\1{2}/ //Match any character and put it in the first group. Make sure group repeats 2 or more from original
  var match1 = num1.toString().match(reg1);

  if (match1 == null) return 0;

  var reg2 = '(' + match1[1] + ')\\1{1}'; //If reg1 matches, find the digit repeated twice (assigned to group one and found again once)
  var match2 = num2.toString().match( RegExp(reg2) )
         
  if (match2 != null) return 1;

  return 0;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TripleDouble(readline());