function ThreeFiveMultiples(num) { 

  var sum = 0;

  if (num==0) return 0;

  for (var i = 0; i < num; i++) {
     if (i%3 == 0) { sum += i; }
     else if (i%5 == 0) { sum += i; }
  };
  return sum;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThreeFiveMultiples(readline());