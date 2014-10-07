function VowelCount(string) { 

  var counter = 0;

  for (var i=0; i<string.length; i++) {
    var reg=/a|e|i|o|u/i;
    if (reg.test(string[i])) { counter=counter+1; }
  }
  return counter;      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());