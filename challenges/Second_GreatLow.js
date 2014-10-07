function SecondGreatLow(array) { 
  var highest = 0,
      second_highest = 0
      lowest = 1000000,
      second_lowest = 1000000;

  for (var i=0;i<array.length;i++) {
    if (array[i] > highest) {
      second_highest = highest;
      highest = array[i]
    }
  }

  for (var i=array.length-1; i>-1; i--) {
    if (array[i] < lowest) {
      second_lowest = lowest;
      lowest = array[i];
    }
  }
  return second_lowest + " " + second_highest;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());