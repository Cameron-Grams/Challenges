function pairwise(arr, arg){
  var finArr = [];
  var total = 0;

  if (arr.length === 0){
    return 0;
  }

  for (var i =0; i < arr.length; i++){
    console.log(arr[i]);
    var sumArr = [];
    for (var j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === arg){
        sumArr.push(i);
        sumArr.push(j);
      }
    console.log(sumArr);
    finArr.push(sumArr);
    }
  }
  return finArr;
}



/*
return the sum of the indices of the numbers that equal the arg
iteratre through the array testing sums
save the numbers and indices of successful matches

edge cases...

*/
// var a = pairwise([1, 4, 2, 3, 0, 5], 7);

var a = pairwise([1, 1, 1], 2);
// should return 1.


console.log(a);
// should return 11.
// 
////pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.




