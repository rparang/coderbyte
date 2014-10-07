function LongestWord(string) { 
  var largest = 0, index = 0;
  var reg = /[a-zA-Z]+/g;
  string = string.match(reg);
  for (var i=0;i<string.length;i++) {
    if (string[i].length > largest) { 
      largest = string[i].length;
      index = i;
    }
  }
  return string[index];
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());