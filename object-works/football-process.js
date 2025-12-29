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

// display country name whose values > 1

for(let [k,v] of Object.entries(footBall)){
    
    if(v>1){
        console.log(k,v);
        
    }
}




// employee detail example

// var employee = [1000,"hari"];

// let code = employee[0];
// let name = employee[1];

// console.log(code);
// console.log(name);


// OR


// var employee = [1000,"hari"];

// let [code ,name] = employee;

// console.log(code,name);


// student detail example

// var student = [1234,"vipin","django",2025];

// var roll = student[0];
// var namee = student[1];
// var course = student[2];
// var year = student[3];

// console.log(roll,namee,course,year);


// OR


// var student = [1234,"vipin","django",2025];

// var [roll,namee,course,year] = student;

// console.log(roll,namee,course,year);



// football

// for(let item of Object.entries(footBall)){
//     console.log(item);
    
// }

// OR

// for(let [k,v] of Object.entries(footBall)){
//     console.log(k,v);
    
// }




