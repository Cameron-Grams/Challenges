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



function sumPrimes(num){
  var arr = [],
      final_sum;

  for (var i = 2; i <= num; i++){
    if (test_digit(i)){
      arr.push(i);
    }
  } 
  var final_sum = arr.reduce(function(a,b){
    return a+b;
  });
  console.log(arr);
  return final_sum;
}


a = sumPrimes(10);
b = sumPrimes(977);
//c = test_digit(5);
//g = test_digit(16);
console.log(10, a);
console.log(977, b);
//console.log(5, c);
//console.log(16, g);

/*
examine each number less than and including given number
for each number determine if it is prime; test for prime should be if 
the range from 1 to sqrt lower number is divisible by only one and itself
*/

