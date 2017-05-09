function pairwise(arr, arg){
  var result = 0;

  for (var i = 0; i < arr.length; i++){
    var innerArr = arr.slice(i);
    for (var j = 0; j < innerArr.length; j++){
      if (arr[i] + innerArr[j] === arg){
        console.log('inner array is ', innerArr);
        console.log('passed with ', arr[i], innerArr[j]);
        console.log('at positions ', i, arr.indexOf(innerArr[j]));
      }

    } 

  }
}




//var a = pairwise([1, 4, 2, 3, 0, 5], 7);  //should be 11
var a = pairwise([1, 1,1], 2);

// pairwise(a, 5);
console.log(a);
