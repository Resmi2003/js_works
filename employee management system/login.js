// function login

function login(){
    const username = document.getElementById('uname').value;  // if we don't put value then input code will appear in console. we need value not code. that's why .value put here
    console.log(username);   // this gives username as output(ie,the thing we put as username) in console.

    // add username to localstorage
    localStorage.setItem("uname",username);   // so after putting resmi in username and pressed login button,then in application displays uname as key and resmi as value.

    // redirect to home(dashboard)
    window.location='./dashboard.html'  // after pressing login button it goes to dashboard page. window.location is a method used to redirect to another page. 
    
}