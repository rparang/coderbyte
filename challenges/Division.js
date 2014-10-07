function Division(num1, num2) {
  for (var i=num1; i>0; i--) {
    if (num1 % i == 0) { 
      if (num2 % i == 0) {
        return i;
      }
    }
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Division(readline());