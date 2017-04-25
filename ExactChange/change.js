//returns the change due from the purchase price after handing in given cash
//change should be return with denomination from highest to lowest and total 
//amount of change due... 
//returns an 2D array of all of the currency and value in that currency; 

function checkCashRegister(price, cash, cid) {

  var amountDue = cash - price;
  var totalChangeValue = 0;
  var change = [];

  const monetaryValue = {
    'PENNY': 0.01,
    'NICKEL':0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'ONE HUNDRED': 100.00
  };

  var cashValue = new Object();

  for (var i = 0; i < cid.length; i++){
    let interimKey = cid[i][0];
    let interimValue = cid[i][1];
    cashValue[interimKey] = interimValue;
  }

  var currencyValue = Object.values(cashValue); //amounts of each currency
  var currency = Object.keys(cashValue); //descending order of currecnies 

  var coh = currencyValue.reduce(function(a,b){
    return a + b;
  });

  var cashOnHand = Math.round(coh * 100) /100;

  if (amountDue > cashOnHand){
    return "Insufficient Funds";
  }
  if (amountDue === cashOnHand){
    return "Closed";
  }

  var currencyArray = currency.reverse();  //calling reverse changes the order to reverse of the original array
  var remainingAmount = amountDue;
  var currencyContribution;
  var currencyMultiple = 0;
  var currencyAmount = [];


  for (var j = 0; j < currencyArray.length; j++){
    let nextCurrency = currencyArray[j];
    let currencyValue = monetaryValue[nextCurrency]; 

    while ((remainingAmount >= currencyValue) && (remainingAmount > 0) && (cashValue[nextCurrency] > 0)){
      remainingAmount = Math.round(remainingAmount * 100)/ 100;
      remainingAmount -= currencyValue;
      cashValue[nextCurrency] -= currencyValue;
      currencyMultiple += 1;
    }

    currencyContribution = currencyMultiple * currencyValue;
    currencyMultiple = 0;

    if (currencyContribution != 0){
      currencyAmount.push(nextCurrency);
      currencyAmount.push(currencyContribution);
    }

    if (currencyAmount.length > 0){
      change.push(currencyAmount);
      currencyAmount = [];
    }

    totalChangeValue += currencyContribution;
    totalChangeValue = Math.round(totalChangeValue * 100)/100;
  };


//  if (amountDue !== totalChangeValue){
//    console.log("amount due ", amountDue);
//    console.log("calculation error");
//    console.log("total change value: ", totalChangeValue);
//  };

  if (amountDue > totalChangeValue){
    return "Insufficient funds";
  }

  console.log("change: ", change);
  return change;
}

// a = checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 



// a = checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


//a = checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// console.log(a);

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]];


//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

