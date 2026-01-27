function register(){
    // to get username value
    const username = document.getElementById('uname').value;
    console.log(username);
    const email = document.getElementById('email').value;
    console.log(email);
    const password = document.getElementById('password').value;
    // console.log(password);

    // to get stored username from local storage
    const storedUsername = localStorage.getItem('uname');

    // get users array from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check all fields are filled
    if(!username || !email || !password){
        alert("please enter all fields");
        return;
    }

    // check username already exists
    else if(users.some(user => user.username === username)){
        alert("already exists");
        return;
    }

    else{
        // add user to users array
        users.push({
            username : username,
            email : email,
            password : password
        });

        // save users array in local storage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful");
        // when pressed register button, it will goes to login page
        window.location = './login.html';
    }
}