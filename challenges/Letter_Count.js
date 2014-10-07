function LetterCount(str) { 

  var str = str.split(' '),
      result = [];

  for (var i=0;i<str.length;i++) {
    var word = str[i].split(''),
        counter = 0;
    for (var j=0;j<word.length;j++) {
      var reg = new RegExp(word[j], 'g'),
          match = str[i].match(reg);
      if (match.length > 1) counter++;
    }
    result.push(counter);
  }
  
  var l = 0;
  for (i=0;i<result.length;i++) {
    if (result[i] > l) l = result[i];
  }
  
  if (l==0) return -1;
  return str[result.indexOf(l)];

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCount(readline());