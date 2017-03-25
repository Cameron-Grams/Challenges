function steamroller(arr){
  var output = [];

  function flat(arr){
    arr.forEach(function(element){
      Array.isArray(element) ? flat(element): output.push(element);
    });
  }

  flat(arr);
  return output;

}


g = steamroller([[1,2],[3,[4]]]);
console.log(g);
