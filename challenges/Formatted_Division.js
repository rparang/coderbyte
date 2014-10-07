function FormattedDivision(num1,num2) {

  var i,
      array = [],
      num_dec = (num1 / num2).toFixed(4),
      left = num_dec.split('.')[0].split('').reverse(),
      right = num_dec.split('.')[1];      

  for (i in left) {
    if (i%3 ==0 && i!=0) {
      array.push(',');
    }
    array.push(left[i]);
  }
  return array.reverse().join('') + "." + right
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FormattedDivision(readline());