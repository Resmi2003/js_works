var employees = [
    {eid:1,name:"kavya",dept:"sales",salary:20000,location:"thrissur"},
    {eid:2,name:"keerthy",dept:"hr",salary:30000,location:"kochi"},
    {eid:3,name:"govind",dept:"finance",salary:10000,location:"trivandrum"},
    {eid:4,name:"nandana",dept:"sales",salary:15000,location:"kollam"},
    {eid:5,name:"vipin",dept:"hr",salary:40000,location:"thrissur"},
    {eid:6,name:"hari",dept:"finance",salary:10000,location:"palakkad"},
    {eid:7,name:"nivin",dept:"hr",salary:50000,location:"kozhikode"},
    {eid:8,name:"dhaksha",dept:"sales",salary:10000,location:"thrissur"},
    {eid:9,name:"dhanya",dept:"hr",salary:20000,location:"kollam"},
    {eid:10,name:"sincy",dept:"sales",salary:10000,location:"thrissur"},

]

// display all employees name
var allEmployees = employees.map(em=>em.name);    // map is used to print names only;otherwise all details of all employees will appear.
console.log(allEmployees);

// display all employees names whose location is thrissur
var locationThrissur = employees.filter(em=>em.location=="thrissur").map(em=>em.name);
console.log(locationThrissur);

// display all employees names whose salary is greater than 20000
var salaryGtTwentyThousand = employees.filter(em=>em.salary>20000).map(em=>em.name);
console.log(salaryGtTwentyThousand);

// sort salary in descending order
employees.sort((em1,em2)=>em2.salary-em1.salary);
console.log(employees);

  

// method chaining means using 2 methods like filter and map same time. but it is only used when its all left sides gives array.

// display employee who has highest salary
var highestSalary = employees.reduce((em1,em2)=>em1.salary>em2.salary?em1:em2).salary;
var highestSalaryEmployee = employees.filter(em=>em.salary==highestSalary);
console.log(highestSalaryEmployee);



// display employee who has lowest salary
var lowestSalary = employees.reduce((em1,em2)=>em1.salary<em2.salary?em1:em2).salary;
var lowestSalaryEmployee = employees.filter(em=>em.salary==lowestSalary);
console.log(lowestSalaryEmployee);







