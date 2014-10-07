function PrimeChecker(num) {

  var num_str_arr = num.toString().split(''); //Split into array
  var arr = num_str_arr.map(function(c) {return parseInt(c)}); //Map to new array with integers
  var perms = Permutations(arr);
  console.log(perms)

  var flag;
  for (var i=0; i<perms.length; i++) { //Loop through perms, check if any are prime
    if (IsPrimeNumber(perms[i]) == true ) { return 1; }
  }
  return 0;

  // Function: Permutations
  // ----------------------
  // Permutations finds all possible permutations of
  // a given array of numbers. This is different than combinations
  // in that all possible results needs to have the same
  // length (i.e., a given array of [1,2,3,4] needs to have
  // all possible results with length 4)
  function Permutations(array) {
    var perm_array = [],
        used_chars = [];
    function perm(array) {
      for(var i=0; i<array.length;i++) {
        var ch = array.splice(i,1)[0]; //Pull off current character
        used_chars.push(ch); //Store in temp array
        if (array.length == 0) { //When original array is exhausted, we store
          perm_array[perm_array.length] = parseInt(used_chars.join(''));
        }
        perm(array) //Call itself with smaller shortened array
        array.splice(i,0,ch); //Put it back together for next iteration
        used_chars.pop(); //Remove last temp array item
      }
    }
    perm(array);
    return perm_array;
  }


  // Function: IsPrimeNumber
  // -----------------------
  // This function determines whether a number is a prime number.
  // Prime numbers are greater than 1 and have no divisors other
  // than 1 and itself.
  function IsPrimeNumber(num) {
    if (num<=1) { return false; } //Need to be greater than 1
    if (num ==2) { return true; } //Two is edge case
    var upper_bound = Math.round(num / 2) + 1; //Find point in middle to work up towards. Will not ever divide by itself
    for (var i=2; i<upper_bound; i++) { //Loop through possible divisors
      if (num % i == 0) { return false; } //If any non-remainder-divisor is found, return false
    }
    return true
  }

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeChecker(readline());