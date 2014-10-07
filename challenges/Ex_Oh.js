function ExOh(str) { 

  var reg_x = /x/g;
  var reg_o = /o/g;
  
  var x_count = (str.match(reg_x) != null) ? str.match(reg_x).length : 0;
  var o_count = (str.match(reg_o) != null) ? str.match(reg_o).length : 0;
  
  if (x_count == o_count) { return true; }
  else { return false; }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());