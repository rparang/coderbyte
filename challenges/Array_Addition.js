function ArrayAddition(array) { 
  var largest = array.sort(function(a,b) {return a - b} ).pop();
  var combinations = GetCombinations(array);
  return (combinations.indexOf(largest) != -1);
}

function GetCombinations(array) {
  var result = [];
  function combo(prefix, array) {
    for (var i=0;i<array.length;i++) {
      result.push(prefix + array[i]);
      combo(prefix + array[i], array.slice(i+1));
    }
  }
  combo(0,array);
  return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAddition(readline());