function TimeConvert(seconds) { 

  if ( seconds < 60 ) { return "0:" + seconds };

  var minutes = Math.floor(seconds / 60);
  var seconds = seconds % 60;
  
  return minutes + ":" + seconds;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());