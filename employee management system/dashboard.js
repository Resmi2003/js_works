// local storage
// To get the data from local storage - getItem(key:string)  // ie, resmi(name we put in usename) is stored in local storage. we need to retrieve that.
let username = localStorage.getItem('uname');   // uname is our key.
console.log(username);  // put a username(resmi) then press login button. so in console resmi will appear. 
head1.innerHTML=`welcome ${username}`   // we need to display resmi after welcome like welcome resmi. so for that we used innerHTML.

// To remove the data from local storage - removeItem(key:string)  // here 2 methods can be used. removeItem(key) also possible.
function logout(){
    localStorage.clear();  // clear() deletes everything from the storage.
    window.location='./login.html'   // after pressing logout button it goes to login page. for that we used window.location here. after pressing logout button, the application key and value box becomes empty. ie, no key and value will be there. only that table there.
}

