function addTogether(args){
  var a = arguments[0];
  var b = arguments[1];

  if (arguments.length < 2) {
    return function(b){
      if ((typeof(a) !== 'number') || (typeof(b) !== 'number')){
        return undefined;
      }
      return a + b;
    } 
  }
  else if ((typeof(a) !== 'number') || (typeof(b) !== 'number')){
        return undefined;
  }
  else {
    return a + b;
  }
}


var b = addTogether(4);

var c = b('penguin');

//var a = addTogether(2,3);

console.log(c);
