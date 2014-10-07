// BracketMatcher takes a string and returns 1 if all sets of parentheses are correctly matching
// and 0 if not. The function is recursive in which a call is made to find the innermost 
// pair, which excepts everything but '(' or ')'. If a match is found, it's stripped and run
// through again
function BracketMatcher(str) { 

  var reg = /\([^()]{0,}\)/; //Finds '(', then a set in which everything is excepted but '(' and ')' 0 or more times, then ')' 
  var result;

  var bracket = function(str) {
    var matched_str = str.match(reg); //Check to see if we've found parenthese pairs

    if (matched_str == null) { //If no more, see if any straglers are remaining
      if (str.match(/\(|\)/) == null) { result = 1; }
      else { result = 0; }
    }
    else {
      console.log(str);
      str = str.replace(reg, ''); //Replace found parenthese pair with nthing and continue
      bracket(str);
    }
  }
  bracket(str);
  return result; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BracketMatcher(readline());