const employeeLeave = {
  arun: 5,
  sree: 2,
  rahul: 8,
  anju: 4,
  manoj: 10,
  divya: 1,
  akhil: 6,
  neethu: 3
}

// Print the leave count of manoj.
// Print all employee names.
// Print all leave counts.
// Find the total number of employees.
// Check whether akhil exists in the object.
// Add a new employee vishnu with 7 leave days.
// Update anju’s leave count to 5.
// Remove divya from the object.
// Print the object after modifications.
// Convert employee names to uppercase and print.



// Print the leave count of manoj.
console.log("leave count of manoj",employeeLeave.manoj);

// Print all employee names.
console.log("all emplyees name",Object.keys(employeeLeave));

// Print all leave counts.
console.log("list leaves",Object.values(employeeLeave));

console.log("total number of employees",Object.entries(employeeLeave).length);

if("akhil" in employeeLeave){
    console.log("exists");
    
}
else{
    console.log("Not exists");
    
}

//adding new employee vishnu with 7 leaves
employeeLeave.vishnu=7
console.log(employeeLeave);


//updating anju's leave to 5
employeeLeave.anju+=1
console.log(employeeLeave);

//deleting divya from the list
delete employeeLeave.divya
console.log(employeeLeave);


console.log(employeeLeave);

// let convertingToUpper ={};

// for(let key in employeeLeave){
//     convertingToUpper[key.toUpperCase()]=employeeLeave[key]
// }
// console.log(convertingToUpper);

var uppercaseNames = Object.keys(employeeLeave).map(name=>name.toUpperCase());
console.log(uppercaseNames);
