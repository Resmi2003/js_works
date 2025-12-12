// Write a function isCenturyYear with one parameter year
// return true if year is a century year else return false

function isCenturyYear(year){

    return year%100==0?true:false;
}

console.log(isCenturyYear(2023));
console.log(isCenturyYear(2000));

