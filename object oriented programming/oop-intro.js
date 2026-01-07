// OOP
// programming style
// way of programming
// we can bring real world entities to programming by using class and object.




// student setStudent,display

class Student{
    name
    age
    roll
    dept


      setStudent(name,age,roll,dept){
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.dept = dept;
      }

      displayStudent(){
        console.log(this.name,this.age,this.roll,this.dept);
        
      }
}

var kavyaInstance = new Student();

kavyaInstance.setStudent("kavya",21,45,"cse");

kavyaInstance.displayStudent();


var dhakshaInstance = new Student();

dhakshaInstance.setStudent("dhaksha",22,100,"cse");

dhakshaInstance.displayStudent();
