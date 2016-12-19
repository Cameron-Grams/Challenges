function romanValue(itrNum, mark){
  var valueKey = ['I','V','X','L','C','D','M'];
  var ret = [];
  itrNum = parseInt(itrNum);
 
  if (itrNum <= 3){
    itrNum = 'low';
  } else if (itrNum > 5){
    itrNum = 'high';
  }
  switch (itrNum){
    case 4:
      return (valueKey[mark] + valueKey[mark + 1]);
      break;
    case 5:
      return(valueKey[mark + 1]);
      break;
    case 9:
      return(valueKey[mark] + valueKey[mark + 2]);
      break;
    case 'low':
      for (i = 0; i < itrNum; i++){
        ret += valueKey[mark];
      }
      return ret;
      break; 
    case 'high':
      ret += valueKey[mark + 1];
      for (j = 0; j < parseInt(itrNum); j++)
        ret += valueKey[mark];
  }
  return "error";
}






function convertToRoman(num){
  var numeral = [];
  var mark = 0;

  var interimVal = '';

  var strNum = num.toString();
  var digitArr = strNum.split('');
  var lowHigh = digitArr.reverse();

  for (i = 0; i < lowHigh.length; i++) {
    itrVal = lowHigh[i];
    console.log(i);
    numeralValue = romanValue(itrVal, mark);
    numeral.push(numeralValue);
  }
  return numeral; 
}

var x;
x = convertToRoman(9);
console.log(x);
// convertToRoman(2843);  //MMDCCCXLIII

