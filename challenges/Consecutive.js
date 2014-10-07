function Consecutive(arr) {

  var total= 0;  
  arr.sort(function(a,b) { return a-b; });
  for (var i=0;i<arr.length-1;i++) {
    var diff = arr[i+1] - arr[i] - 1;
    var total = total + diff;
  }
  return total
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Consecutive(readline());