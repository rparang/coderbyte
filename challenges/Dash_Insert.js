function DashInsert(num) { 

  var temp = false;
  var arr = num.toString().split('');
  var len = arr.length;

  while (len--) {
    if (arr[len] % 2 != 0) {
      if (temp == true) arr.splice(len+1, 0,"-");
      temp = true;
    }
    else temp = false;
  }
  return arr.join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());