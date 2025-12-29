var footBall = {
    brazil : 5,
    portugal : 0,
    england : 1,
    germany : 4,
    argentina : 3,
    urugay : 2,
    espain : 1,
    italy : 4,
    france : 2
}

// for taking all keys 
// for(let k in footBall){
//     console.log(k);
// }

// OR

for(let k of Object.keys(footBall)){       // if put console.log(Object.keys(footBall)); then all will comes in one array. To get each separately we put it inside for loop.
    console.log(k);

}




// for taking all values
// for(let v in footBall){
//     console.log(footBall[v]);
// }

// OR

for(let v of Object.values(footBall)){
    console.log(v);
    
}




// for taking all keys and values
// for(let item in footBall){
//     console.log(item,footBall[item]);
// }

// OR

// for(let item of Object.entries(footBall)){
//     console.log(item);
    
// }

// OR

for(let item of Object.entries(footBall)){    // if we put Object.entries(footBall) in a separate variable (eg:let arr=like that anything) then its output will be in a single array.
    console.log(item[0]);
    console.log(item[1]);
    
}





