var Person = function(firstandlast){
  var name = {first: null, last: null};
  var persArr = firstandlast.split(' ');
  name.first = persArr[0];
  name.last = persArr[1];

  this.setFullName = function(firstandlast){
    var persArr = firstandlast.split(' ');
    name.first = persArr[0];
    name.last = persArr[1];
  };

  this.getFullName = function(){
   return  name.first + " " + name.last;
  }  
 
  this.getFirstName = function(){
    return name.first;
  }

  this.getLastName = function(){
    return name.last;
  }
  this.setFirstName = function(newName){
    name.first = newName;
  }

  this.setLastName = function(last){
    name.last = last;
  }

 }

var Jim = new Person("Jim Jones");

console.log(Jim.getFullName());

Jim.setFirstName("Pune");

console.log(Jim.getFullName());

Jim.setLastName("Comanche");

console.log(Jim.getFullName());

var a = Object.keys(Jim);
console.log(a);




