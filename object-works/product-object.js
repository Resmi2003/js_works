// create an object product with attributes
// code, title, price, color

var product = {
    "code" : "err123",
    "title" : "laptop",
    "price" : 80000,
    "color" : "violet"
}

console.log(product.title);
console.log(product["title"]);




// check attribute is exist or not
// attribute in object => True or False    // in is used to check.

if("offer" in product){
    console.log("exist");
    
}

else{
    console.log("not exist");
    
}


// add a new property
product.offer = 500;
console.log(product);



// update a thing
product.price += 2000;    // here already price is 80000 , so updating it by adding 2000 to it, so it will become 82000.
console.log(product);



// add new property qty as 10 if qty not exist else update qty as
// current qty + 10

if("qty" in product){
    product.qty += 10;    // update
}

else{
    product.qty = 10;      // add
}

console.log(product);







