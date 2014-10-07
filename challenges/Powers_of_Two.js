function PowersofTwo(num) { 
  return ( (Math.log(num) / Math.log(2) ) % 1 === 0 ) ? true : false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());