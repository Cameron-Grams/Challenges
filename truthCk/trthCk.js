function truthCheck(arr, term){
  var truth = true;
  var t_list = [];
  arr.forEach(function(element){
    if ((element[term] == 0) || (element[term] == null)){
      truth = false;
    } 
    });
  return truth;
}



d = truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");

c = truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");

a = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

b = truthCheck([ {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4},  {"user": "Tinky-Winky", "sex": "male", "age": 0}], "age")

console.log(d);
