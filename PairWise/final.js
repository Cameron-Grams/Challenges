function pairwise(arr, arg){
  var result = 0;
  var workArr = arr.slice();

  for (var i = 0; i < workArr.length; i++){
    for (var j = i + 1; j < workArr.length; j++){
      if (workArr[i] + workArr[j] === arg){
        result += i + j;
        workArr[i] = workArr[j] = NaN;
      }
    } 
  }
  return result;
}



//var a = pairwise([1, 3, 2, 4], 4);  //should be 11

//var a = pairwise([1, 4, 2, 3, 0, 5], 7);  //should be 11
var a = pairwise([1, 1,1], 2);

// pairwise(a, 5);
console.log(a);
