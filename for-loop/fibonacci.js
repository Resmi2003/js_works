// fibonacci number
// Means 0,1,1,2,3,5,8....... 0 is previous. 1 is current. 0+1=1 is next. That is a number(next) is the sum of its previous number and current number. 


var limit = 10;    // limit=10
var previous = 0;  // previous=0
var current = 1;   // current=1

console.log(previous);  //prints 0
console.log(current);   // prints 1

for(let i=3;i<=limit;i++){    // i=3 3<=10 True
    
    let next = previous + current;   // next=0+1=1
    console.log(next);    // prints 1,

    previous = current;   // 0=1
    current = next;       // 1=1
    
}

