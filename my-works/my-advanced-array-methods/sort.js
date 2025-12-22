// sort is used when we need to sort like in ascending order, descending order like that.

var numbers = [2,3,200,10,11,12,13,14,15,16];

// ascending order
numbers.sort((n1,n2)=>n1-n2);   // here n1-n2 means first n1 then n2.condition is n1<n2 ? n1 (first n1) then n2.
console.log(numbers);


// descending order
numbers.sort((n1,n2)=>n2-n1);   // here n2-n1 means first n2 then n1.condition is n1<n2 ? n2 (first n2) then n1.
console.log(numbers);
