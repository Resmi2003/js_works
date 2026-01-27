function login(){
    const username = document.getElementById('uname').value;
    console.log(username);
    const password = document.getElementById('password').value;
    // console.log(password);

    // get users array from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check all fields are filled
    if(!username || !password){
        alert("please enter all fields");
        return;
    }

    // find user
    const user = users.find(user => user.username === username);

    if(!user){
        alert("Incorrect username");
        return;
    }

    if(user.password !== password){
        alert("Incorrect password");
        return;
    }

    else{
        // store logged in user
        localStorage.setItem("loggedInUser", username);

        alert("Login successful");
        // when pressed login button, it will goes to dashboard page
        window.location = './dashboard.html';
    }
}