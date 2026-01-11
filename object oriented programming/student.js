class Student{

    setStudent(name,age,roll,dept){
        this.studentname = name,
        this.studentage = age,
        this.studentroll = roll,
        this.studentdept = dept
        console.log("student details created");
    }

    printStudent(){
        console.log(this.studentname,this.studentage,this.studentroll,this.studentdept);
        
    }

}


// object 1
s1 = new Student();
s1.setStudent('Dhaksha',22,47,'cse');
s1.printStudent();

// object 2
s2 = new Student();
s2.setStudent('Keerthana',23,48,'cse');
s2.printStudent();