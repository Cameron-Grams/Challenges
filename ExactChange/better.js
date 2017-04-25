//best practice example


var denom = [
  {name: 'one hundred', val: 100.00},
  {name: 'twenty', val: 20.00},
  {name: 'ten', val: 10.00},
  {name: 'five', val: 5.00},
  {name: 'one', val: 1.00},
  {name: 'quarter', val: 0.25},
  {name: 'dime', val: 0.10},
  {name: 'nickel', val: 0.05},
  {name: 'penny', val: 0.01}
];

function checkCashRegister(price, cash, cid){
  var change = cash - price;

  var register = cid.reduce(function(acc, curr){
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});


  if (register.total === change){
    return "Closed";
  }

  if (register.total > change){
    return "Insufficient Funds";
  }

  var change_arr = denom.reduce(function(acc, curr){
    var value = 0;

    while (register[curr.name] > 0 && change >= curr.val){
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
 
    if (value > 0){
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);

  return change_arr; 
}










