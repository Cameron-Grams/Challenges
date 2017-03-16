function uniteUnique(arr){
  var firstFlat = (arguments).reduce(function(a,b){
    console.log(a, b);
    return a.concat(b);
    }, []);
}

var a = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) ;

// var b = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

console.log(a);
// console.log(b);


