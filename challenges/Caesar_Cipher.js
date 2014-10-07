function CaesarCipher(str,num) { 
  var str = str.split(''),
      lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (var i in str) {
    if( (/[a-z]/).test(str[i]) ) { 
      var offset = lower.indexOf(str[i]) + num;
      if (offset > lower.length - 1) { offset = offset % lower.length }
      str[i] = lower[offset];
    }
    if( (/[A-Z]/).test(str[i]) ) {
      var offset = upper.indexOf(str[i]) + num;
      if (offset > upper.length - 1) { offset = offset % upper.length }
      str[i] = upper[offset];
    }
  }
  return str.join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CaesarCipher(readline());