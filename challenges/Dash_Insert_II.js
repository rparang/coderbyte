function DashInsertII(num) {

  var num = num.toString().split(''); //Turn num into array of strings
  for (var i=1;i<num.length;i++) {
    console.log(i)
    if (IsEvenNumber(num[i-1]) == true && IsEvenNumber(num[i]) == true) { //Check to see if two consecutive even numbers, then check odd
      num.splice(i,0,'*')
      i++; //Add to the index counter since we're adding to the original array
    }
    if (IsEvenNumber(num[i-1]) == false && IsEvenNumber(num[i]) == false) {
      num.splice(i,0,'-')
      i++;
    }
  }
  return num.join('');

}

// Function: IsEvenNumber
// Check to see if a number is even or not
function IsEvenNumber(num) {
  if (num == 0) return -1;
  if (num % 2 == 0) return true;
  return false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsertII(readline());