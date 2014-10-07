function SimpleMode(arr) {
  var modes = [], i, j,
      mode = 0;
  for (i=0;i<arr.length;i++) {
    var counter = 0;
    var element = arr.splice(i,1)[0];
    for (j=0;j<arr.length;j++) {
      if(arr[j] == element) counter++;
    }
    modes.push(counter);
    arr.splice(i,0,element);
  }
  for (i=0;i<modes.length;i++) {
    if (modes[i] > mode) { mode = modes[i]; }
  }
  if (mode==0) return -1;
  return arr[modes.indexOf(mode)];
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleMode(readline());