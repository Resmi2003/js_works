// expenses

// display all expenses , iterating using index

var expenses = [1,2,3,4,5,6,7,8,9,10,11];
// index -      0 1 2 3 4 5 6 7 8  9 10

for(i=0;i<expenses.length;i++){
    console.log(expenses[i]);
}



// display all expenses , using of
for(let e of expenses){
    console.log(e);
}



// display total expense
var total = 0;
for(let e of expenses){
    total += e;
}
console.log(total);



// display costly expense
var maxExp = 0;
for(let e of expenses){
    if(e>maxExp){
        maxExp = e;
    }
}
console.log(maxExp);




// display minimum expense
var minExp = expenses[0];
for(let e of expenses){
    if(e<expenses[i]){
        minExp = e;
    }
}
console.log(minExp);


