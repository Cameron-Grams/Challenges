function updateInventory(a, b){
  var finResults = [];
  var intResults = [];

  var objectA = a.reduce(function(acc, curr){
    acc[curr[1]] = curr[0];
    return acc; 
  }, {});


  var resultB = b.reduce(function(acc, curr){
    var items = {};
    items["name"] = curr[1];
    items["quant"] = curr[0];
    acc.push(items);
    return acc;
  }, []);

  var arrayA = a.reduce(function(acc, curr){
    acc.push(curr[1]);
    return acc;
  }, []);

  for (var i = 0; i < resultB.length; i++){
    if (arrayA.indexOf(resultB[i]["name"]) === -1 ){
      objectA[resultB[i]["name"]] = resultB[i]["quant"];
    } else {
      objectA[resultB[i]["name"]] += resultB[i]["quant"];
    }
  }

  var finalArr = Object.keys(objectA).sort();
  for (var j = 0; j < finalArr.length; j++){
    intResults.push(objectA[finalArr[j]]);
    intResults.push(finalArr[j].toString());
    finResults.push(intResults);
    intResults = [];
  }

  return finResults;
}














a = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

console.log(a);
