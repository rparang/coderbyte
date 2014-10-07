function PrimeTime(num) { 
  var bound = Math.round(num/2);
  var flag;

  for (i=bound;i>1;i--) {
    if(num % i === 0) flag = false;
  }
  if (flag==false) return false;
  else return true;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());