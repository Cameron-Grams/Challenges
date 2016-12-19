function myReplace(str, before, after) {
  var strArr = str.split(' ');
  var loc = strArr.indexOf(before);

  if (before[0] !== before[0].toLowerCase()){
    newStr = after[0].toUpperCase() + after.slice(1);
    console.log(newStr);
  } else {
      newStr = after;
  }
 


  strArr.splice(loc, 1, newStr);
  console.log(strArr);
  return strArr.join(' ');
}

x = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(x);



//  should return "He is Sitting on the couch".

