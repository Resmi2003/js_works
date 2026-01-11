class Employee{
// instance initialization
    setEmployee(id,name,salary,designation){

        this.empid = id,
        this.empname = name,
        this.empsalary = salary,
        this.empdesignation = designation
        console.log("employee details created");
    }

    printEmployee(){
        console.log(this.empid,this.empname,this.empsalary,this.empdesignation);
        
    }

}

// object 1
emp = new Employee();
emp.setEmployee(1000,'Kavya','Developer',40000);
emp.printEmployee();

// object 2
emp1 = new Employee();
emp1.setEmployee(1010,'Keerthy','Developer',30000);
emp1.printEmployee();