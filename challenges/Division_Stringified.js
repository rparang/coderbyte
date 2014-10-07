function DivisionStringified(num1,num2) { 
  var result = Math.round(num1 / num2);
  result = result.toString().split('').reverse();

  for (var i=0;i<result.length;i++) {
    if (i%4 == 0) {
      result.splice(i,0,",");
    }
  }
  
  result.splice(0,1)
  return result.reverse().join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());