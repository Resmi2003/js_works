
var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0
}

// unpaid students names
var unpaid = Object.entries(expenses).filter(item=>item[1]==0);
console.log(unpaid);

// paid students names
var paid = Object.entries(expenses).filter(item=>item[1]!=0);
console.log(paid);

// display student who paid > 250
var greaterThanTwoFifty = Object.entries(expenses).filter(item=>item[1]>250);
console.log(greaterThanTwoFifty);

// total expenses
var totalExpenses = Object.values(expenses).reduce((sum,e)=>sum+e,0);    // first position is undefined, so sum is initialized as zero to prevent not a number NaN.
console.log(totalExpenses);

// individual split
var individualSplit = totalExpenses/Object.entries(expenses).length;
individualSplit = Math.round(individualSplit)  // math.round is to remove decimal
console.log(individualSplit);

// splitWise
var splitWise = {}
for(let [k,v] of Object.entries(expenses)){

    splitWise[k] = individualSplit - v;
}
console.log(splitWise);





