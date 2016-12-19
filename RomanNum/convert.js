function romanValue(itrNum, mark){
  var valueKey = ['I','V','X','L','C','D','M'];
  var ret ='';
  itrNum = parseInt(itrNum);

  if (itrNum == 4) {
    return (valueKey[mark] + valueKey[mark + 1]);     
  }

  if (itrNum == 5) {
    return(valueKey[mark + 1]);
  }

  if (itrNum == 9) {
    return(valueKey[mark] + valueKey[mark + 2]);
  }

  if (itrNum <= 3) {
    for (i = 0; i < itrNum; i++){
      ret += (valueKey[mark]);
    }
    return ret; 
  }

  if ((itrNum <= 8) && (itrNum > 5)) {
    ret += (valueKey[mark + 1]);
    for (j = 0; j < itrNum - 5; j++){
      ret += valueKey[mark];
    }
    return ret; 
  }
}

function convertToRoman(num){
  var numeral = [];
  var mark = 0;
  var result = '';
  var numeralValue = '';

  var strNum = num.toString();
  var digitArr = strNum.split('');
  var lowHigh = digitArr.reverse();
  console.log('rev array: ', lowHigh);

  for (i = 0; i < lowHigh.length; i++){
    console.log('in iter loop');
    itrVal = lowHigh[i];
    numeralValue = romanValue(itrVal, mark);
    console.log(numeralValue);
    console.log(itrVal);
  }
  result = numeralValue.join();
  return result; 
}

var x;
// x = convertToRoman(458);
x = convertToRoman(1984);

console.log(x);
// convertToRoman(2843);  //MMDCCCXLIII

