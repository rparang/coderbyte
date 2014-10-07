function SimpleAdding(num) { 

  var temp = 0;

  for (var i=1; i<=num; i++) {
    temp = temp + i;
    //console.log(temp);
  } 
      
  return temp;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());