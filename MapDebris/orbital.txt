function orbitalPeriod(arr){
  var answer = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i = 0; i < arr.length; i++){
    var newObj = {name: null, orbitalPeriod: null};
    var rad = earthRadius + arr[i].avgAlt;
    var orbPrd = Math.round(2 * (Math.PI) * (Math.pow((Math.pow(rad, 3)/GM), 0.5)));
    newObj.name = arr[i].name;
    newObj.orbitalPeriod = orbPrd;
    answer.push(newObj);
  }
  return answer;
}

var a = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

//  should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// should return [{name: "sputnik", orbitalPeriod: 86400}]

console.log(a);

//T = 2(Pi)(a**3/GM)** -1  ....in seconds? 
