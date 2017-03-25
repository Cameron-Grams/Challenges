function smallest(arr){
  var range = [], 
      stop_search = true,
      large_mult = 1,
      return_array = [],
      first_iteration = 0,
      try_reduce = true
      x = arr[0]; 


  arr.sort(function(a,b){return a-b});
  
  for (var i = arr[0]; i <= arr[1]; i++){
    range.push(i);
  }

  for (var k = arr[1]; k >= arr[0]; k--){
    stop_search = true;
    large_mult *= k;
    for (var j = arr[0]; j <= arr[1]; j++){
      if (large_mult % j !== 0){
        stop_search = false;
        console.log("mult ", large_mult, " failed on ", j);
      } 
      if (stop_search && (j === arr[1])){
        console.log(large_mult, " passes");
        return_array.push(large_mult);
        break;
      }    
    }
  }

  first_iteration = return_array[0];

  while (try_reduce) {
    console.log("x is ", x, "first iteration is ", first_iteration);
    if ((first_iteration % x === 0) && ( x !== 1)){
      first_iteration = first_iteration / x;
    } else {
      x += 1;
    } 

    for (var h = arr[0]; h <= arr[1]; h++){
      if ( first_iteration % h !== 0){
        first_iteration = first_iteration * x;
        x += 1;
      }
    }

    if ( x > arr[1]){
      try_reduce = false;
    }
  }

  console.log(first_iteration);
  return first_iteration;


}

g = smallest([13, 1]);
console.log(g);
