// display all expenses


//index-          0     1     2     3     4    5     6      7     8     9     10    
var expenses = [23000,20000,21000,40000,5000,89000,60000,123000,67000,78000,76000]


// iterating array using index
console.log("iterating array using index");

for(let i=0;i<expenses.length;i++){
    console.log(expenses[i]);
    
}


// iterating array using of
console.log("iterating array using of");

for(let e of expenses){
    console.log(e);
    
}



// display total expense
console.log("display total expense");

var total = 0;
for(let e of expenses){
    total += e;
}

console.log(`Total expense = ${total}`);




// finding costly expense
console.log("finding costly expense");

var maxExp = 0;
for(let e of expenses){
    if(e>maxExp){
        maxExp = e;
    }
}

console.log("max expense=",maxExp);




// finding minimum expense
console.log("finding minimum expense");

var minExp = expenses[0];
for(let e of expenses){
    if(e<minExp){
        minExp=e;
    }
}

console.log("min expense=",minExp);







