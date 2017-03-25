function smallest(arr){
  var large_mult= 1,
      return_array = [],
      range = [],
      answer = 0,
      stop_search = true;

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
  console.log(return_array);


  return return_array[0];
}

g = smallest([23,18]);

console.log(g);
console.log(g/360360);
