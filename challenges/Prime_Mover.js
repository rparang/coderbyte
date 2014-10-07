function PrimeMover(num) { 

  var l=1;
  var counter=0;

  while(l++) {
    var prime = PrimeTime(l);
    if (prime == true) {
      console.log(l)
      counter++
    }
    if (counter == num) return l;
  }  
}

function PrimeTime(num) { 
  var bound = Math.round(num/2);

  for (i=bound;i>1;i--) {
    if(num % i === 0) return false;
  }
  return true;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());