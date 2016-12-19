// from http://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/ 


function toRoman(num){
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M','CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (i=0; i< decimal.length; i++){
    while (num%decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}


function toDec(numStr){
  var result = 0;
  var convertKey = {'M':1000, 'CM':900, 'D':500, 'CD':400, 'C':100, 'XC':90, 'L':50, 'XL':40, 'X':10, 'IX':9, 'V':5, 'IV': 4, 'I': 1};
  var nums = numStr.split('');

  for (i = 0; i < nums.length; i++){
    result += convertKey[nums[i]];
    if (convertKey[nums[i]] > convertKey[nums[i-1]]){
      result = result - (2 * convertKey[nums[i-1]]);
    }
  } 
  return result;
}


y = toDec('MCMLXXXIV');

x = toRoman(1984);
console.log(x, y);
