function pairwise(arr, arg){

  var total = 0;

  if (arr.length === 0){
    return 0;
  }

  var result = arr.reduce(function(acc,crr,curIn){
    console.log(acc);
    for (var i = curIn; i < arr.length; i++){
      if (crr + arr[i] === arg){
        console.log(acc, curIn, i);
        total += curIn + i;
        return total;
      }  
     }
    }, 0);
  return total; 
}



/*
return the sum of the indices of the numbers that equal the arg
iteratre through the array testing sums
save the numbers and indices of successful matches

edge cases...

*/
var a = pairwise([1, 4, 2, 3, 0, 5], 7);

// var a = pairwise([1, 1, 1], 2);
// should return 1.


console.log(a);
// should return 11.
// 
////pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.




