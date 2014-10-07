function LetterCountI(str) { 

      str = str.split(' ');
      var array_largest = [],
          largest = 0;

      for(var i=0;i<str.length;i++) {
        var number_of_letters = NumberOfLetters(str[i]);
        array_largest.push(number_of_letters);
        console.log(array_largest);
      }
      for (var i=0;i<array_largest.length;i++) {
        console.log(array_largest[i]);
        if (array_largest[i] > largest) largest = array_largest[i];
      }
      if (largest == 0) return -1;
      else return str[array_largest.indexOf(largest)];
    }

    function NumberOfLetters(string) {

      var string_array = string.split(''),
          counter=0;

      for (var i=0; i<string_array.length; i++) {
        var test = string.match(new RegExp(string_array[i], 'g'));
        console.log(test);
        if (test.length > 1) counter++;
      }
      return counter;
    }
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());