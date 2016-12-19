function whatIsInAName(collection, source){
  var arr = [];
  var passesTest = false;
  var sourceKeys = Object.keys(source);

  for (j = 0; j < collection.length; j++){
    for (i = 0; i < sourceKeys.length; i++){
      if (collection[j].hasOwnProperty(sourceKeys[i])){
        if (collection[j][sourceKeys[i]] === source[sourceKeys[i]]){
          passesTest = true; 
        } 
      } else {
          passesTest = false;
      }
    }
    if (passesTest){
      arr.push(collection[j]);
    }  
    passesTest = false;
  }
  return arr;
}



var x = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) ;
console.log(x);
// should return {first: "Tybalt", last: "Capulet"}


// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
