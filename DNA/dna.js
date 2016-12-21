function pairElement(str){
  var pairs = {'A':'T','C':'G','G':'C','T':'A'}; 
  var finArr = [];

  var ltrs = str.split('');

  for (i=0; i < ltrs.length; i++){
    var newArr = [];
    newArr.push(ltrs[i]);
    newArr.push(pairs[ltrs[i]]);
    finArr.push(newArr);
  }
  return finArr;
}

//given a string, return an array of sub-arrays
//each sub-array is composed of a pair of string
//strings are selected based on matching pairs

a = pairElement('GCG');
console.log(a);
