function test_digit(num){
  var low, high, mid;
  var factors = [];

  mid = Math.ceil(num/2);

  for (var i =1; i <= mid; i++){
    if (num % i === 0){
      factors.push(i);
    }
  }
  if (factors.length > 1)
    {return false;}
  else {
    return true;
  }
}



function listPrimes(num){
  var arr = [],
      final_sum;

  for (var i = 2; i <= num; i++){
    if (test_digit(i)){
      arr.push(i);
    }
  } 

  console.log(arr);
  return arr;
}


a = listPrimes(10);
//b = sumPrimes(977);
//c = test_digit(5);
//g = test_digit(16);
console.log(10, a);

