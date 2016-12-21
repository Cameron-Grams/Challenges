function fearNotLetter(str){
  var resultsArr = [];
  var digitArr = [];

  for (i= 0; i < str.length; i++){
    var digit = str.charCodeAt(i);
    digitArr.push(digit); 
  }
  console.log(digitArr);

  for (j = 1; j < digitArr.length; j++){
    if ( digitArr[j] - digitArr[j-1] > 1){
      resultsArr.push(digitArr[j]);
    } 
  }

  if (resultsArr.length === 0){
    return undefined;
  } else if (resultsArr.length > 0){
    results = String.fromCharCode(resultsArr[0] - 1);
    return results;
  } else {
    return "Other error";
  }
}

a = fearNotLetter('bcd');

 // fearNotLetter('abce');
console.log(a);
// need d
