function factors(num){

}





function smallestCommons(arr){
  var range = [],
      large_mult = 1,
      small_mult = 1;

  arr.sort(function(a,b){
    return a-b;
  });

  for (var i = arr[0]; i <= arr[1]; i++){
    range.push(i);
    large_mult *= i;
  }


  for (var j = arr[0]; j<= arr[1]; j++){
    console.log(j, large_mult);
    if (large_mult % j === 0){
      small_mult = large_mult / j;
      large_mult = small_mult;
    }
    
  }

  return large_mult;

}



g = smallestCommons([5,1]);
console.log(g);
