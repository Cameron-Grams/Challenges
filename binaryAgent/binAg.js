function letters(num){
  return String.fromCharCode(num);
}

function charCd(str){
  var len = str.length;
  var power, value = 0, add;
  if (len === 8){
    for (var i = 0; i < len; i++){
       power = (len - 1) - i;
      if (str[i] == "1"){
        add = Math.pow(2, power);
        console.log(add);
        value += add;          

      }
    }
  return value;
  }
   else {
    console.log("Length issue");
    return "Error";
  }
}

function binaryAgent(str){
  var parts = str.split(' ');
  var chars = [];
  var results;

  for (var i = 0; i< parts.length; i++){
    let item = parts[i];
    let next_item = charCd(item);
    let next_letter = letters(next_item);
    chars.push(next_letter);
    results = chars.join('');
  }
  return results; 
}

b = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")

a = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(b);
