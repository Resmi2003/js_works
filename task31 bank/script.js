// navigation
// index page buttons
function goToLoginPage(){
    window.location = './login.html';
}

function goToRegisterPage(){
    window.location = './register.html';
}

// dashboard logout
function logout(){
    alert("Logged out successfully");
    window.location = './index.html';
}

// register page "sign in" button
function goToLoginFromRegister(){
    window.location = './login.html';
}

// login page "sign up" button
function goToRegisterFromLogin(){
    window.location = './register.html';
}


// users helpers

// Get all users from localStorage
function getUsers() {
    // localStorage stores data as string
    // JSON.parse converts string → JS object
    // || [] ensures empty array if no users exist
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save updated users array to localStorage
function saveUsers(users) {
    // JSON.stringify converts JS object → string
    localStorage.setItem("users", JSON.stringify(users));
}

// Get currently logged-in user
function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

// Store logged-in user
function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}




// register

function registerUser() {
    // Get values from register input fields
    const username = document.getElementById("reg-username").value;
    const accNo = document.getElementById("reg-acc").value;
    const password = document.getElementById("reg-pass").value;

    // Validation: check empty fields
    if (!username || !accNo || !password) {
        alert("All fields are required");
        return; // stop function
    }

    // Get existing users
    let users = getUsers();

    // Check if account already exists
    const exists = users.find(u => u.accNo === accNo);

    if (exists) {
        alert("Account already registered. Please login.");
        goToLoginFromRegister(); // redirect to login
        return;
    }

    // Add new user to users array
    users.push({
        username: username,
        accNo: accNo,
        password: password,
        balance: 0 // initial balance
    });

    // Save updated users list
    saveUsers(users);

    alert("Registration successful!");
    goToLoginFromRegister(); // redirect to login page
}




// login

function loginUser() {
    // Get login input values
    const accNo = document.getElementById("login-acc").value;
    const password = document.getElementById("login-pass").value;

    // Get users from storage
    let users = getUsers();

    // Find user by account number
    const user = users.find(u => u.accNo === accNo);

    if (!user) {
        alert("Incorrect account number");
        return;
    }

    // Check password
    if (user.password !== password) {
        alert("Incorrect password");
        return;
    }

    // Store logged-in user
    setCurrentUser(user);

    alert("Login successful!");
    window.location = './dashboard.html'; // go to dashboard
}



// deposit

function depositAmount() {
    // Get deposit input values
    const accNo = document.getElementById("dep-acc").value;
    const amount = Number(document.getElementById("dep-amount").value);
    const result = document.getElementById("deposit-result");

    // Get all users
    let users = getUsers();

    // Find matching user
    let user = users.find(u => u.accNo === accNo);

    if (!user) {
        alert("Invalid account number");
        return;
    }

    // Validate deposit amount
    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    // Add amount to balance
    user.balance += amount;

    // Save updated users
    saveUsers(users);

    alert("Amount successfully added");

    // Show result below deposit section
    result.innerText = `Deposited ₹${amount}. Current Balance: ₹${user.balance}`;

    // Clear input fields
    document.getElementById("dep-acc").value = "";
    document.getElementById("dep-amount").value = "";
    result.value = "";
}




// withdraw

function withdrawAmount() {
    // Get withdraw input values
    const accNo = document.getElementById("with-acc").value;
    const amount = Number(document.getElementById("with-amount").value);
    const result = document.getElementById("withdraw-result");

    // Get all users
    let users = getUsers();

    // Find user
    let user = users.find(u => u.accNo === accNo);

    if (!user) {
        alert("Invalid account number");
        return;
    }

    // Show current balance
    alert(`Current balance: ₹${user.balance}`);

    // Validate withdrawal
    if (amount <= 0 || amount > user.balance) {
        alert("Invalid withdrawal amount");
        return;
    }

    alert(`Withdrawal amount: ₹${amount}`);

    // Deduct amount
    user.balance -= amount;

    // Save updated users
    saveUsers(users);

    alert("Amount successfully withdrawn");
    alert(`Balance after withdrawal: ₹${user.balance}`);

    // Show result below withdraw section
    result.innerText = `Withdrawn ₹${amount}. Remaining Balance: ₹${user.balance}`;

    // Clear input fields
    document.getElementById("with-acc").value = "";
    document.getElementById("with-amount").value = "";
}

// welcome user
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("welcome-user").innerHTML = `Welcome ${currentUser.username}`;

// clear results when user clicks input fields
function clearDepositResult() {
    document.getElementById("deposit-result").innerText = "";
}

function clearWithdrawResult() {
    document.getElementById("withdraw-result").innerText = "";
}








