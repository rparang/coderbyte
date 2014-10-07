function CountingMinutes(str) { 

  var s_split = str.split('-'),
      from = Convert(s_split[0]),
      to = Convert(s_split[1]);

      if (from<to) { return to - from; }
      else if (from == to) { return 0; }
      else { return 1440 - (from-to); }
}

function Convert(str) {

  var h = parseInt(str.split(':')[0]),
      m = parseInt(str.split(':')[1].match(/[0-9]/g).join(''));

  if ((/am/ig).test(str)) {
    if (h == 12) hours = 0;
    else hours = h;
  }
  else {
    if (h == 12) hours = h;
    else hours = h + 12;
  }
  return (hours * 60) + m;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutes(readline());