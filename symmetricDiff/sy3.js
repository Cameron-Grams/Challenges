function test(arr1, arr2){
  var result = [];
  var set1 = new Set(arr1);
  var set2 = new Set(arr2);

  for (var i of set1){
    if (!set2.has(i)){
      result.push(i);
    }
  }

  var resSet = new Set(result);

  for (var j of set2){
    if (!set1.has(j) && !resSet.has(j)){
      result.push(j);
    }
  }

  var set3 = new Set(result);
  return Array.from(set3).sort();
}




function sym(args){
  var fullArray, countObj, result = [], g;
  var argsArray = Array.from(arguments);
  
  result = argsArray.reduce(function(a,b){
      return test(a,b);
    }, []);

  return result;

}

//a = sym([1, 2, 3], [5, 2, 1, 4]);



a= sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
// should return [1, 2, 4, 5, 6, 7, 8, 9].

console.log(a);







