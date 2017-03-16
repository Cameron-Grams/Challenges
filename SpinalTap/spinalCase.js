function spinalCase(str){
  var one, two, three, four, five, six;

  one = str.split(/(?=[A-Z][a-z]+)/);
  two = one.join(' ');
  three = two.replace(/_/g, '');
  four = three.replace(/\s+/g, '-');
  return four.toLowerCase();

}

var i = spinalCase("AllThe-small Things");
var j = spinalCase("this Is Spinal Tap");
var g = spinalCase("Teletubbies say Eh-oh");
var k = spinalCase("The_Andy_Griffith_Show");
var p = spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap"
console.log(k);


