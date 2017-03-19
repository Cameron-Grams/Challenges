function sumFibs(num){
  var odd_fibs = [],
       fib = 0,
       low_fib = 0,
       last_fib = 1;

  while (fib <= num) {
    console.log(fib);
    if (fib % 2 === 1){
      odd_fibs.push(fib);
    }
    low_fib = last_fib;
    last_fib = fib;
    fib = low_fib + last_fib;
  }
  console.log(odd_fibs);
  total = odd_fibs.reduce(function(a,b){
    return a + b;
  });
  return total;
}

g = sumFibs(10);
console.log(g);
