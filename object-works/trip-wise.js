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
var split = total/Object.entries(expenses).length;         // total/number of users   // object.entries used to convert object into array.because object don't support length. so if we put like this then we will get count.
console.log("Individual split",split);



// new object everyone's pending and receiving price
var splitWise = {}

for(let user in expenses){

    let amount = expenses[user];     // for getting how much that person paid
    splitWise[user] = split - amount;   // spliwise of a user is the amount that user has to give or receive after equal bill splitting.
}

console.log(splitWise);   // in it's output, -ve number means the amount they will receive. and positive means the amount they need to pay.
