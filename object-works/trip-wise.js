// tripWise

var expenses = {
    jazeel : 780,
    nazim : 680,
    arun : 1000,
    mahin : 500,
    amal : 750,
    thusar : 1500

}



// total expense
var total = 0;

for(let key in expenses){
    total += expenses[key];
}

console.log("Total Expense =",total);



// who paid most
var maxPrice = 0;

for(let key in expenses){

    let currentPrice = expenses[key];

    if(currentPrice>maxPrice){
        maxPrice = currentPrice;
    }

}

for(let key in expenses){
    let curPrice = expenses[key];

    if(maxPrice==curPrice){
        console.log(key,curPrice);
    }
}



// split
var split = total/Object.entries(expenses).length;         // total/users
console.log("Individual split",split);



// new object everyone's pending and receiving price
var splitWise = {}

for(let user in expenses){

    let amount = expenses[user];
    splitWise[user] = split - amount;
}

console.log(splitWise);
