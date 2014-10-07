function LetterChanges(str) {

  var alph_array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var temp = [];

  str = str.split('');

  for (var i=0; i < str.length; i++) {
    if (isAlphanumeric(str[i]) == true) {
      var index = alphabetIndex(str[i], alph_array);
      temp.push(newLetter(index, alph_array));
    }
    else {
      temp.push(str[i]);
    }
  }
  return temp.join('');
}


function alphabetIndex(letter, array) {
  return array.indexOf(letter);
}

function newLetter(index, array) {
  var vowels = ["a","e","i","o","u"];
  if (index > -1) {
    if (index == 25) {
      new_letter =  array[0];
    }
    else {
      new_letter = array[index+1];
    }
  }
  switch(new_letter) {
    case "a":
      // new_letter = "A";
      console.log("a");
      new_letter = new_letter.toUpperCase();
    case "e":
      new_letter = new_letter.toUpperCase();
    case "i":
      new_letter = new_letter.toUpperCase();
    case "o":
      new_letter = new_letter.toUpperCase();
    case "u":
      new_letter = new_letter.toUpperCase();
  }
  return new_letter;
}

function isAlphanumeric( str ) {
  return /^[a-zA-Z]+$/.test(str);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());