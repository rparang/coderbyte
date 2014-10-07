function StringScramble(str1, str2) {

  string1_array = str1.split('');

  for (var i=0;i<str2.length;i++) {
    var index = string1_array.indexOf(str2[i]);
    if (index == -1 ) return false;
    else {
      string1_array.splice(index,1);
    }
  }
  return true;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());