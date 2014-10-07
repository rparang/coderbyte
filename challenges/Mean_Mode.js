function MeanMode(arr) { 

  var mean = Mean(arr);
  var mode = Mode(arr);

  return (mean == mode) ? 1 : 0;
         
}

function Mean(array) {
  var total = 0;
  for (var i=0;i<array.length;i++) {
    total += array[i];
  }
  return total / array.length;
}


function Mode(array) { 
  var modes = [];
  var temp = 0;
  for (var i=0;i<array.length;i++) {

    var counter = 0;
    var v = array.splice(i,1)[0];

    for (var j=0;j<array.length;j++) {
      if (array[j] == v) {
        ++counter;
      }
    }
    modes.push(counter+1);
    array.splice(i,0,v);
  }

  for (var i=0;i<modes.length;i++) {
    if (modes[i] > temp) {
      temp = modes[i];
    }
  }
  return array[modes.indexOf(temp)];
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());