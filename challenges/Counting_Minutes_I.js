function CountingMinutesI(str) { 

  var from;
  var to;

  from = Minutes( str.split('-')[0] );
  to = Minutes( str.split('-')[1] );

  if (from < to) { return to - from; }
  else { return 1440 - (from - to); }
}

function Minutes(str) {

  var ampm;
  var reg = /am/;

  if (reg.test(str)) {
    str = str.replace('am','').split(':');
    if (str[0] == 12) { return parseInt(str[1]);  }
    else { return parseInt(str[0])*60 + parseInt(str[1]); }
  }
  else {
   str = str.replace('pm','').split(':'); 
    if (str[0] == 12) { return parseInt(str[0])*60 + parseInt(str[1]); }
    else {
      return (parseInt(str[0])+12)*60 + parseInt(str[1]);
    }
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());