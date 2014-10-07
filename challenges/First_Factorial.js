function FirstFactorial(num) { 

  if(num==1) {return num;}
  else {
    return (num*FirstFactorial(num-1));
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());