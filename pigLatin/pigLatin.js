function translatePigLatin(str){
  var newStr = str;
  var vowels = 'aeiouy';

  while (vowels.indexOf(newStr[0]) === -1){
    newStr = newStr.substring(1) + newStr[0];
  }


  if (newStr[0] === str[0]){
    newStr += 'way';
  } else {
    newStr = newStr + 'ay'; 
  }
  
  return newStr;
}

a = translatePigLatin("algorithm");
console.log(a);


