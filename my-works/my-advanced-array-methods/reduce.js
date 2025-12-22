// reduce() is used when we need a single value (single output) after procesing the entire array. Example : sum, total, maxNumber, minNumber, product.

// total
var numbers = [10,11,12,13,14,15,16];
var total = numbers.reduce((n1,n2)=>n1+n2);
console.log(total);    // if we need average do total divided by length, so average will get. 


// product
var product = numbers.reduce((n1,n2)=>n1*n2);
console.log(product);


// maximum
var maxNumber = numbers.reduce((n1,n2)=>n1>n2?n1:n2);
console.log(maxNumber);


// minimum
var minNumber = numbers.reduce((n1,n2)=>n1<n2?n1:n2);
console.log(minNumber);




