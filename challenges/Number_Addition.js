function NumberAddition(string) { 
  var reg = /\d+/g;
  var string_array = string.match(reg);
  var int_array = string_array.map(function(s) { return parseInt(s); })

  return int_array.reduce(function(a,b) { return a+b; });
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());