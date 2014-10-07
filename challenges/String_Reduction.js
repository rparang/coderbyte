// StringReduction takes a string, finds two non-repeating letters, and replaces them with 
// an adjacent letter. It then continues this only repeating letters are found and returns
// the length of the remaining string.
function StringReduction(str) { 

  var result;
  var reg_non_repeat = /a[bc]|b[ac]|c[ab]/; //Finds all non-repeating pairs for a through c

  var string_reduce = function(str) {
    var match = str.match(reg_non_repeat); //Find the first match from left to right of the string

    if (match == null) { //If no non-repeating pairs found, we're done
      result = str.length;
    }
    else {
      var swap_letter = "abc".match( new RegExp( '[^'+match[0]+']' )) //Find the adjacent character
      var str = str.replace(match[0], swap_letter[0]) //Replace match with adjacent character
      string_reduce(str); //Call itself with smaller string
    }

  };
  string_reduce(str);
  return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringReduction(readline());