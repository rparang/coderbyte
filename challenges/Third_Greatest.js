function ThirdGreatest(strArr) { 
  return strArr.sort(function(a,b) {return b.length - a.length})[2];
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());