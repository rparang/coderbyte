function BinaryConverter(str) { 
  var result = 0,
      str = str.split('').reverse();
  for (var i=0;i<str.length;i++) {
    result += parseInt(str[i]) * Math.pow(2, i);    
  }
  return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BinaryConverter(readline());