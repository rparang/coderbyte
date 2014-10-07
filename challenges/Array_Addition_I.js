function ArrayAdditionI(arr) { 

  var largest = arr.sort(function(a,b) {return a-b;}).pop();

      for(var i=0;i<arr.length;i++){

        console.log(i);

        var myArray = arr;
        var cloneArray = myArray.slice();
        
        var width = cloneArray.splice(0,i+1);
        console.log("width is "+ width);
        var sum = Sum(width);
        console.log("sum is "+ sum)

        if (sum == largest) {return true;}

        for(var j=0; j<arr.length; j++) {

          console.log(j);

          var myArray = arr;
          var cloneArray = myArray.slice();
          
          var width = cloneArray.splice(j,j+1);
          console.log("width is "+ width);
          var new_sum = Sum(width);
          console.log("sum is "+ sum)
          if (new_sum == largest) {return true;}

        }

        for(var k=0; k<cloneArray.length; k++) {

          console.log(k)
          if (new_sum + cloneArray[k] == largest ){
            return true;
          }

        }
        

      }
      return false;
         
}

function Sum(arr) {
  var total=0;
  for(var i=0; i<arr.length; i++){ total= total+arr[i] }
  return total;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());