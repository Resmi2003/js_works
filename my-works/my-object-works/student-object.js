// create an object student with properties
// roll-number, name, course, email, gender

var student = {
    "roll-number" : "47",
    "name" : "Resmi",
    "course" : "MEARN Stack",
    "email" : "resmirmenonrrm@gmail.com",
    "gender" : "female"
}

console.log(student.name);
console.log(student["name"]);    // 2 ways to call . if used square brackets, then double quotes is mandatory.
console.log(student.email);
console.log(student["email"]);



// adding a new property value to existing object
student.college = "IES College Of Engineering";
console.log(student);


student["pass_out_year"] = 2025;
console.log(student);




