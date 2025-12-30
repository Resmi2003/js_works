// 1. Create an object person with properties name, age, and city.
console.log("name, age and city :");

var person = {
    name: "kavya",
    age: 22,
    city: "thrissur"

}

console.log("name :", person.name);
console.log("age :", person.age);
console.log("city :", person.city);


// 2. How do you access the age property of an object using dot notation?
console.log("access age property :");

console.log("age :", person.age);


// 3. How do you access the city property using bracket notation?
console.log("access city property :");

console.log("city :", person["city"]);


// 4. Add a new property email to an existing object.
console.log("add new property email :");

person.email = "kavya@gmail.com";
console.log(person);


// 5. Update the value of an object property.
console.log("update value of an object property :");

person.age += 1;
console.log(person);


// 6. Delete the age property from an object.
console.log("delete age property :");

delete person.age;
console.log(person);


// 7. Check whether a property phone exists in an object.
console.log("property phone exists or not :");

if ("phone" in person) {
    console.log("phone exists");
}

else {
    console.log("phone not exist");

}


// 8. Write a program to iterate over all properties of an object using for...in.
console.log("iterate over all properties :");

for(let key in person){
    console.log(key);
    
}


// 9. Count the total number of properties in an object.
console.log("count total number of properties :");

var count = 0;
for(let key in person){
    count ++;
}

console.log(count);


// 10. Convert an object into an array of keys.
console.log("convert object into array of keys :");

console.log(Object.keys(person));


// 11. Convert an object into an array of values.
console.log("convert object into array of values :");

console.log(Object.values(person));


// 12. Convert an object into an array of key–value pairs.
console.log("convert object into array of key-value pairs :");

console.log(Object.entries(person));


// 13. Create an empty object and add properties dynamically.
console.log("create empty object and add properties :");

var user = {};
user.name = "indira";
user.age = 21;
user.qualification = "btech";

console.log(user);


// 14. Compare two objects for equality (basic comparison).
console.log("compare 2 objects for equality :");

var student1 = {
    name : "keerthy",
    roll : 47,
    dept : "cse"

}

var student2 = {
    name : "keerthy",
    roll : 47,
    dept : "cse"

}

let isEqual = true;

for(let key in student1){

    if(student1[key]!=student2[key]){
        isEqual = false;
        break;
    }
}

console.log(isEqual);


// 15. Nest one object inside another object.
console.log("nest one object inside another object :");

var student = {
    name : "indira",
    age : 22,
    roll : 47,
    dept : "cse",
    address : {
        city : "thrissur",
        state : "kerala"
    }
}

console.log(student);


// 16. Use Object.keys() to display all keys of an object.
console.log("display all keys :");

for(let key of Object.keys(person)){
    console.log(key);
    
}


// 17. Use Object.values() to display all values of an object.
console.log("display all values :");

for(let value of Object.values(person)){
    console.log(value);
    
}


// 18. Use Object.entries() to loop through keys and values.
console.log("loop through keys and values :");

for(let [k,v] of Object.entries(person)){
    console.log(k,v);
    
}


// 19. Use Object.assign() to copy one object into another.
console.log("copy one object into another :");
// syntax : Object.assign(target,source)
// Object.assign() is used to copy objects.
// here target is empty object, that is {}. target means the object that will receive the properties. that is, to that we will copy.
// source means the object whose properties are copied.

var employee = {
    name : "rakesh",
    eid : 123,
    dept : "hr"

}

var copyEmployee = Object.assign({},employee);

console.log(copyEmployee);


// 20. Merge two objects using Object.assign().
console.log("merge 2 objects using Object.assign() :");
// if we use same properties then value from last object will only show in output. because overwriting happens.

var user1 = {
    name : "raghu",
    id : 123,
    dept : "hr"

}

var user2 = {
    city : "thrissur",
    roll : 456,
    job : "manager"

}

var merged = Object.assign({},user1,user2);
console.log(merged);


// 21. Merge two objects using the spread operator {...}.
console.log("merge 2 objects using spread operator :");
// if we use same properties then value from last object will only show in output. because overwriting happens.

var employee1 = {
    name : "raghu",
    id : 123,
    dept : "hr"

}

var employee2 = {
    city : "thrissur",
    roll : 456,
    job : "manager"

}

var merged1 = {...employee1,...employee2};   // here it is object, that's why we put it in curly brackets {}. If it is array or string, then put it in square brackets [].
console.log(merged1);


// 27. Create a method inside an object and call it.
console.log("method inside an object :");

var passenger = {
    name : "indira",
    age : 22,
    id : 123,
    greet : function(){
        console.log("Hello,welcome!");
        
    }
}

passenger.greet();


// 28. Use this keyword inside an object method.
console.log("this keyword inside an object method :");
// this keyword refers to the current object.

var passenger1 = {
    name : "Indira",
    age : 22,
    greet : function(){
        console.log("Hello,my name is",this.name,"and I am",this.age,"years old");   // here this.name is Indira and this.age is 22.
        
    }
}

passenger1.greet();


// 31. Write a program to find the sum of all numeric values in an object.
console.log("sum of all numeric values :");
// numeric values means numbers only, that is integers or decimals. eg: 100,3.14,-50.
//  not numeric : "100",true(boolean),null.

var scores = {
  maths: 80,
  english: 70,
  science: 90,
  name: "dhaksha"   // non-numeric property
};

var sum = 0;

for (let key in scores) {
  if (typeof scores[key] == "number") {
    sum += scores[key];
  }
}

console.log("Sum of numeric values:", sum);


// 32. Remove all properties with null or undefined values.
console.log("remove all properties with null or undefined values :");

var data = {
  name: "maya",
  age: null,
  city: "thrissur",
  email: undefined
};

// this loop is to remove null or undefined values.
for (let key in data) {
  if (data[key] == null || data[key] == undefined) {
    delete data[key];
  }
}

console.log(data);


// 33. Clone an object without affecting the original object.
console.log("clone object without effecting original :");

var original = {
  name: "riya",
  age: 22,
  city: "thrissur"
};

var clone = Object.assign({}, original);   // here we can use spread operator also for cloning.  var clone = {...original};

clone.age = 23;  // here clone is modified

console.log("Original Object:", original);
console.log("Cloned Object:", clone);


// 34. Check if an object is empty.
console.log("Check if an object is empty :");

var item = {}   // if this object has properties, then the output will be Object is not empty.

if(Object.keys(item).length==0){
    console.log("Object is empty");
    
}

else{
    console.log("Object is not empty");
    
}


// 35. Sort object properties by values.
console.log("Sort object properties by values :");

var marks = {
    student1 : 30,
    student2 : 10,
    student3 : 20

}

 var sortedMarks = Object.entries(marks).sort((s1,s2)=>s1[1]-s2[1]);
console.log(sortedMarks);


// 36. Find the key with the highest value in an object.
console.log("key with the highest value in an object :");

var salaries = {
    divya : 30000,
    kavya : 20000,
    indira : 60000,
    roshni : 60000

}

var highestValue = Object.entries(salaries).reduce((s1,s2)=>s1[1]>s2[1]?s1:s2);
// console.log(highestValue);
var highestValueKey = Object.entries(salaries).filter(s1=>s1[1]==highestValue[1]);
console.log(highestValueKey);


// 37. Convert an object to an array and vice versa.
console.log("Convert an object to an array and vice versa :");

var fruits = {
    apple : 20,
    orange : 40,
    guava : 50,
    watermelon : 70

}

console.log("object into array");

var array = Object.entries(fruits);
console.log(array);

console.log("array into object");

var objectNew = Object.fromEntries(array);
console.log(objectNew);


// 38. Count the number of times each character appears in a string using an object.
console.log("Count the number of times each character appears in a string using an object :");

var string = "javascript";
var emptyObject = {}

for(let ch of string){

    if(ch in emptyObject){
        emptyObject[ch] += 1;
    }

    else{
        emptyObject[ch] = 1;
    }
}

console.log(emptyObject);


// 40. Use destructuring to extract object properties.
console.log("Use destructuring to extract object properties :");

var newStudent = {
    name : "dhanya",
    age : 20,
    id : 123,
    dept : "cse",
    college : "ies"

}

var {name,age,id,dept,college} = newStudent;    // use curly brackets for object destructuring and square brackets for array destructuring.
console.log(name,age,id,dept,college);


// 42. Loop through an object and print only string values.
console.log("Loop through an object and print only string values :");

var newUser = {
    name : "indira",
    age : 21,
    roll : 47,
    course : "mearn",
    college : "ies"

}

for(let key in newUser){

    if(typeof newUser[key]=="string"){
        console.log(newUser[key]);
        
    }
}











// 22. Freeze an object using Object.freeze().
// 23. Check whether an object is frozen.
// 24. Prevent adding new properties using Object.seal().
// 25. Check whether an object is sealed.
// 26. Explain the difference between Object.freeze() and Object.seal().
// 29. Create an object with multiple methods.
// 30. Convert an object into a JSON string.
// 39. Create a student object and calculate total and average marks using methods.
// 41. Rename a property using destructuring.
// 43. Write a function that accepts an object and returns only numeric properties.
// 44. Convert nested objects into a flat object.
// 45. Compare two objects and find common properties.