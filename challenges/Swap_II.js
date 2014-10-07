// My original response is below. Although it was correct, it's enormous compared to mattlarsh's elegant code,
// which I've replicated below to learn. I've resubmitted the answer below:

function SwapII(str) { 

  var swap = str.replace(/\d+[a-zA-Z]+\d/g, function(c) { //Find substring that starts with digit, has string of alpha chars, then another digit
    return c[c.length-1] + c.match(/[a-zA-Z]/g).join('') + c[0]; //Return last character (number) as first, first as last, and keep middle letters
  })

  var swapCase = swap.replace(/[a-z]/ig, function(e) {  //Take each character and swap casing
    if (e == e.toLowerCase()) return e.toUpperCase();
    if (e == e.toUpperCase()) return e.toLowerCase();
  })

  return swapCase;

}

// SwapII will loop through each character with the following logic:
// - if the character is a letter, store the character and swap the casing
// - if the character is whitespace, reset any stored temp variables as we'll start anew
// - if the character is a number, and we've alread come across a previous number and a 
// letter (indicating that a letter must divide the two numbers), then we swap the two numbers
// - if the character is only a number, store the number for later checking and nullify the temp letter

// function SwapII(str) { 

//   var str  = str.split(''),
//       n    = null, //temp number
//       l    = null, //temp letter
//       num  = /[0-9]/,
//       alph = /[a-zA-Z]/,
//       whitespace = /\s/;

//   for (var i=0;i<str.length;i++) {
//     if (alph.test(str[i])===true) {
//       l = str[i]; //if letter, store original
//       if (l == l.toUpperCase()) { str[i] = l.toLowerCase(); } //convert to lowercase or uppercase
//       else { str[i] = l.toUpperCase(); }
//     }
//     if (whitespace.test(str[i]) == true) { //if whitespace, reset temp variables to refresh
//       l = null;
//       n = null;
//     }
//     if (num.test(str[i]) === true && l != null && n != null) { //if number and both letter and number already exist, swap
//       var temp = str[i]
//       str.splice(i, 1, str[n]); //replace current
//       str.splice(n, 1, temp); //replace previous
//       n = null; //reset variables
//       l = null;
//     }
//     if (num.test(str[i]) === true) { //if number, store and reset letter
//       n = i; //store number's index
//       l = null; //reset letter to refresh
//     }
//   }
//   return str.join('');    
// }
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapII(readline());