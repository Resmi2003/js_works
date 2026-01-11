// Student rollno,sname,mark,grade
class Student{
    // instance initialization - constructor() - Default method(no need to create a new function)
    // first execute this methods then user defined methods execute
    constructor(rollno,name,grade,total){
        this.rollno = rollno;
        this.Studentname = name;
        this.grade = grade;
        this.totalMark = total;
    }
    printDetails(){ // user defined function
        console.log(this.rollno,this.Studentname,this.grade,this.totalMark);
    }
}

s1 = new Student(1,'Amar',8,450); // after object creation constructor involves automatically
// s1.setStudent(1,'Amar',8,450);
s1.printDetails();