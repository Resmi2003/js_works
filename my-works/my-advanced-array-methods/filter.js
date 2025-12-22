// filter() is used when there is a condition. Like, if we need to filter some elements only like odd numbers, even numbers , greater than 13 like that.


// >13
// var evens
// var odds

var numbers = [10,11,12,13,14,15,16];

// >13
var numGtThirteen = numbers.filter(num=>num>13);
console.log(numGtThirteen);


// evens
var evens = numbers.filter(num=>num%2==0);
console.log(evens);


// odds
var odds = numbers.filter(num=>num%2!=0);
console.log(odds);


