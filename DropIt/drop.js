function dropElements(arr, func){
  for (var i = 0; i < arr.length; i++){

    let item = func(arr[i]);

    console.log(item);
    if (item){
      return arr.slice(i);
    } 
  }
  return [];
}





//a = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

// should return [3, 4]

a = dropElements([1, 2, 3, 4], function(n) {return n > 5;});

console.log(a);




