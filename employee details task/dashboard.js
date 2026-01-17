// local storage
// To get the data from local storage - getItem(key:string)
const username = localStorage.getItem('uname');  // uname is our key.
head1.innerHTML = `Welcome ${username}`;   // we need to display resmi after welcome like welcome resmi. so for that we used innerHTML.

// To add a new Employee details to the local storage
function addEmployee(){

    employee = {         // if it was a single item, then we can create key and value pair to take data. but,here many things are there like id,name,address etc so we need to create object.here more than one data is there.
        id:empid.value,   // id is key(anything we can put). empid is value because object is like key:value like that.   .value is used to take the value of empid, we can do this instead of getElementById.
        name:empname.value,
        addr:empaddr.value,
        desg:empdesg.value,
        exp:empexp.value,
        sal:empsal.value

    }

    if(employee.id in localStorage){    // then ee objectne local storagikk kodkkum. before that check employee.id already exists in local storage. 2 person can have same name, so id is unique, so here we are using id to check that person already exists in local storage or not.
        alert("already exist");         // employee.id means employeennu paranja objectinte akathulla id nnu paranja key.
    }

    else{                  //   key     ,                value
        localStorage.setItem(employee.id,JSON.stringify(employee));   // employee.id is key(id is unique). value we cannot directly put, because it is object, so we need to convert it into string, for that we put JSON.stringify(employee), employee object is our value.
        alert("employee details created");   // then check application tab after entering details like id,name and press add employee button. so "employee details created" popup will appear. also in application tab we can see the created key and value details.
        empid.value = "";      // but the displayed things like name,id etc still remains in all box(while we try to enter next id and details) we don't need that. we need all that fields clear after pressing the add employee button. so for that we need to clear all input boxes. 
        empname.value = "";   // this means empname.value = empty (we are clearing inputs).
        empaddr.value = "";
        empdesg.value = "";
        empexp.value = "";
        empsal.value = "";   // so after entering data like id,name etc in all fields then we press add employee button, at that time all data in that fields will be cleared. also the details we entered in the fields will be stored in local storage in application tab as key and value.

    }

}

// searching      // then we need to search id in that search id box, so if we entered details of 1st id person , then after putting 1 in the serach id box then we need to get all details we put about 1st id person.
function search(){
    let key = emp.value;  // first we need is value in input. this means emp we created in search id's input as id, that's value we needed here. 
    let employee = JSON.parse(localStorage.getItem(key));  // then need to take data from local storage. because we want to know if that id already exists or not.  
    // first oru objectne nammal stringify cheyth local storagikk kodthu, so thirich edkkumbo parsithatt venam local storaginnu getiyan.that means,thirich object aakkit venam local storaginnu getiyan. getItem only needs key as parameter.
    // then namuk ee employeelu ulla sathanathe ellam display cheyyikkanam.for displaying already we created an empty div with id="result".
    // innerHTML means javascriptlu usitha contents ellam consolelu mathre verullu.namk ith actually browserlekkanu verandath.so browserlekk ithine kond veranayi usiyunna dominte oru method aanu innerHTML.innerHTML usith namk aare venelum display cheyyikkam like table,card,div..any content can display.
    
    // flowbite is site for taking card,table etc anything we can get from that place, for that select javascript language there.it works in tailwind.
    // backtick mandatory  // it will display the details we put in fields when we search for id 1 in search id box (in table,card like format) what we put inside back tick.
    result.innerHTML = `   
    
<div class="w-screen bg-white max-w-sm p-4 sm:p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <h5 class="mb-2 text-base md:text-xl font-semibold text-heading">Employee</h5>
    <ul class="my-6 space-y-3">
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.id}</span>
                </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.name}</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.addr}</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.desg}</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.exp}</span>
            </a>
        </li>
         <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.sal}</span>
            </a>
        </li>
    </ul>
</div>
    
    `

}


// To remove the data from local storage - removeItem(key:string)  // here 2 methods can be used. removeItem(key) also possible.
function logout(){
    localStorage.clear();  // clear() deletes everything from the storage.
    window.location='./login.html'   // after pressing logout button it goes to login page. for that we used window.location here. after pressing logout button, the application key and value box becomes empty. ie, no key and value will be there. only that table there.
}