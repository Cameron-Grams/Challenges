function findElement(arr, func){
  var results = arr.filter(func);
  return results[0];
}

a = findElement([1, 3, 5,  9 ], function(num) { return num % 2 === 0; });
console.log(a);


