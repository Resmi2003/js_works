// fibonacci number


var limit = 10;    
var previous = 0;  
var current = 1;   

console.log(previous);  
console.log(current);   

for(let i=3;i<=limit;i++){    
    
    let next = previous + current;   
    console.log(next);    

    previous = current; 
    current = next;  
    
}

