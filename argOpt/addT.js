function addTogether(args){
  var a = arguments[0];
  var b = arguments[1];




  if (arguments.length < 2) {
    if ((typeof(a) !== 'number') || (typeof(b) !== 'number')){
      return undefined;
    } else {
    return function(b){
      if ((typeof(a) !== 'number') || (typeof(b) !== 'number')){
        return undefined;
      }
      return a + b;
    } 
  }
  }
  else {
    return a + b;
  }
}

var b = addTogether(4);

var c = b(3);

//var a = addTogether(2,3);

console.log(c);
