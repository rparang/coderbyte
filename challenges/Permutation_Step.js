function PermutationStep(num) { 


  var permArr = [], usedChars = [];

  var array_to_sort = permute(num);
  array_to_sort = array_to_sort.sort( function(a,b) { return a-b; })
  console.log(array_to_sort)
  var position = array_to_sort.indexOf(num)

  if (array_to_sort[position+1] != num  && array_to_sort[position+1]) {
    return array_to_sort[position+1] }
  else {
    return -1
  }


  function permute(input) {
    var chars = input.toString().split("");
    for (var i = 0; i < chars.length; i++) {
      var ch = chars.splice(i, 1);
      usedChars.push(ch);
      if (chars.length == 0)
        {
          permArr[permArr.length] = parseInt(usedChars.join(""));
        }
      permute(chars.join(""));
      chars.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PermutationStep(readline());