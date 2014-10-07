function SwapCase(string) { 
  var sen_array = string.split('');
  var swap = sen_array
    .map(function(c) {
      if (c == c.toUpperCase()) return c.toLowerCase();
      else return c.toUpperCase();
    });
  return swap.join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());