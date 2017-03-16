function uniteUnique(arr){

  var args = Array.prototype.slice.call(arguments, 0);
  var firstFlat = args.reduce(function(a,b){
       return a.concat(b);
  }, []);

  var results = firstFlat.reduce(function(a,b){
    console.log(a, b);
    if (a.indexOf(b) === -1){
      a.push(b);
    }
    return a;
  }, []);

  return results;
}

//var a = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) ;

var a = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

console.log(a);
// console.log(b);


