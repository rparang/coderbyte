function ArithGeo(array) { 
 
  for(var i=0; i < array.length-1; i++) { 
    if (array[i+2]-array[i+1] == array[i+1]-array[i]) {return "Arithmetic";}
    else if (array[i+2] / array[i+1] == array[i+1] / array[i]) {return "Geometric";}
    else {return -1}
  }

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());