function pairwise(array, argument){
  var values = [];
  var totVals = [];
  if (array.length === 0){
    return 0;
  }

  var result = array.reduce(function(accum, curr, curIn, array){
    values = [];
    var array2 = array.slice(curIn);
    var inner = array2.reduce(function(acc, cu, cuIn){
      if (curr + cu === argument){
        console.log('passed with ', curr, cu);
        values.push(curr, cu);        
        acc += (array.indexOf(curr) + array.indexOf(cu));
      }      
      console.log('inner ', acc, curIn, cuIn, values);
      return acc;
    }, 0);
    if (values.length > 0){
      totVals.push(values);
    }
    accum += inner;
    return accum;
  }, 0);
  console.log('result', result);
  console.log(totVals);
  return result;
}

// var a = [1, 2, 3, 4, 5];
//var a = pairwise([1, 4, 2, 3, 0, 5], 7);  //should be 11
var a = pairwise([1, 1,1], 2);

// pairwise(a, 5);
console.log(a);
