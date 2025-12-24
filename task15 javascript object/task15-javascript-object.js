// 1. Create an object to store student details such as name, age and course.

var student = {
    name : "Kavya",
    age : 22,
    course : "MEARN Stack"

}

console.log("Name :",student.name);
console.log("Age :",student.age);
console.log("Course :",student.course);



// 2. Access and display the name property from an object.
console.log("Name :",student.name);



// 3. Add a new property called email to an existing object.
student.email = "kavya@gmail.com";
console.log("Added new property email :",student);



// 4. Update the age value in an object.
student.age += 1;
console.log("Updated age :",student);



// 5. Delete the phone number property from an object.
student.phoneNumber = 7593006927;
console.log("Added phoneNumber :",student);
// to delete an object => delete object.property or delete object["property"]
delete student.phoneNumber;
console.log("Deleted phonenumber :",student);



// 6. Display all keys present in an object.
// to display all keys => console.log(Object.keys(objectName)); it's output is in array format.   or  for(let key in objectName){  console.log(key); }
console.log("All keys :");
for(let key in student){    
    console.log(key);
}



// 7. Display all values present in an object.
// to display all values => console.log(Object.values(objectName)); it's output is in array format.   or  for(let key in objectName){  console.log(objectName[key]); }
console.log("All values :");
for(let key in student){
    console.log(student[key]);
}



// 8. Check whether a property called address exists in an object.
console.log("Check address exist or not :");
if("address" in student){
    console.log("Address exists");
}

else{
    console.log("Address not exist");
}



// 9. Count the total number of properties in an object.
// to count the total number of properties => let count = Object.keys(objectName).length; console.log(count);   or   let count = 0; for(let key in objectName){ count++; } console.log(count); 
let count = 0;
for(let key in student){
    count ++;
}

console.log("Count of total number of properties :",count);



// 10. Loop through an object and display each key and its value.
console.log("Each key and it's value :");
for(let key in student){
    console.log(key + " : " + student[key]);

}
















