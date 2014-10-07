function ArithGeoII(arr) {

  var flag;

  for (var i=0;i<arr.length-2;i++) {
    if (arr[i+2] - arr[i+1] == arr[i+1] - arr[i] && (flag == "Arithmetic" || i==0)) {
      flag = "Arithmetic";
    }
    else if  (arr[i+2] / arr[i+1] == arr[i+1] / arr[i] && (flag == "Geometric" || i==0)) {
      flag = "Geometric"; 
    }
    else flag = -1;
  }
  return flag;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeoII(readline());