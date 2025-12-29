var fruits = {
    apple : 250,
    orange : 100,
    mango : 120,
    cherry : 220,
    guava : 90,
    banana : 70
}



// display products whose price > 100

for(let [k,v] of Object.entries(fruits)){

    if(v>100){
        console.log(k,v);
        
    }
}

// display products available in range of 50 to 150

var priceFilter = Object.entries(fruits).filter(item=>item[1]>=50 && item[1]<=150);
console.log(priceFilter);

// display costly product

var costlyProduct = Object.entries(fruits).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2);
console.log(costlyProduct);

// display product with low cost

var cheapestProduct = Object.entries(fruits).reduce((it1,it2)=>it1[1]<it2[1]?it1:it2);
console.log(cheapestProduct);



// if we got array, then use array method
// if we got object, then use object method
// if we got string, then use string method


