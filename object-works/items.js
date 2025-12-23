
var vegetables = {
    onion : 35,
    potato : 60,
    brinjal : 50,
    carrot : 70,
    beans : 100,
    garlic : 200,
    chilly : 120,
    ginger : 200

}

for(let key in vegetables){

    console.log(key,vegetables[key]);
    
}



// display all vegetable name available under rs 65.
for(let key in vegetables){
    if(vegetables[key]<65){
        console.log(key);
        
    }
}



// display costly product
let maxPrice = 0;

for(let key in vegetables){
    
    let currentPrice = vegetables[key];

    if(currentPrice>maxPrice){
        maxPrice = currentPrice;
    }
}

for(let key in vegetables){      // if some vegetable have same price

    let curPrice = vegetables[key];

    if(maxPrice==curPrice){
        console.log(key,curPrice);
        
    }
}




    

