function RunLength(str) { 

  var reg1 = /(.)\1*/g;
  var reg2 = /[a-zA-Z]/;
  var runlength = [];
  var array = str.match(reg1);

  array.map(function(s) {
    var length = s.length;
    var letter = s.match(reg2);
    runlength.push(length+letter);
  });
  return runlength.join('');       
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());