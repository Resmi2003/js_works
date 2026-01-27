// to get logged in user name after welcome
const welcome = document.getElementById('welcome');
const username = localStorage.getItem('loggedInUser');
welcome.innerHTML = `Welcome ${username}`;


// INCOME SECTION
// load existing data from local storage
// get saved total balance from local storage, if exists; else start with zero.
let total = Number(localStorage.getItem('totalBalance')) || 0;  

// show total balance in the balance box
document.getElementById('totalBalance').innerHTML = `Rs ${total} /-`;

// get saved income list from local storage, if exists; else start with empty array.
let incomeList = JSON.parse(localStorage.getItem('incomeList')) || [];

// show(render) each saved income row in the table 
incomeList.forEach(item => {     // item is one object from incomeList
    // create a table row(<tr>)
    let row = document.createElement("tr");
    
    // fill the row with data (type,amount,balance,date & time)
    row.innerHTML = `
        <td class="border p-2">${item.type}</td>   
        <td class="border p-2">Rs ${item.amount}</td>
        <td class="border p-2">Rs ${item.balance}</td>
        <td class="border p-2">${item.dateTime}</td>
    `;

    // add the row to the income table body
    document.getElementById("receiptBody").appendChild(row);
});



// function to add new income
function addIncome(){
    // get user input from fields
    const incomeType = document.getElementById('incomeType').value;  // type of income
    console.log(incomeType);
    const incomeAmount = Number(document.getElementById('incomeAmount').value);  // amount
    console.log(incomeAmount);

    // select the total balance
    const totalBalance = document.getElementById('totalBalance');
   
    // validations
    // if incomeAmount less than zero
   if(incomeAmount<0){
    alert("Enter valid amount");
    return;  // stop function
   }

   // check all fields are filled
   else if(incomeType==="" || incomeAmount===""){
    alert("please enter all fields");
    return;
   }

   else{
    // update the total balance
    total = total + incomeAmount;
    alert("Income added successfully");
    totalBalance.innerHTML = `Rs ${total} /-`;  // show updated total balance 
   }

   // get current date and time
   let dateTime = new Date().toLocaleString();  // new Date() is used to get current date and time. toLocaleString() is used to convert to readable date + time. if we want date and time separately, then use now.toLocaleDateString() for date and now.toLocaleTimeString() for time.

   // create a new table row (<tr>) for this income
   let newRow = document.createElement("tr");   // creates one row
   newRow.innerHTML = `
    <td class="border p-2">${incomeType}</td>
    <td class="border p-2">Rs ${incomeAmount}</td>
    <td class="border p-2">Rs ${total}</td>
    <td class="border p-2">${dateTime}</td>
     `;

     // append the new row at the end of the income table
   document.getElementById('receiptBody').appendChild(newRow); // adds next row below


   // save data to localStorage
   // add this income to the array
incomeList.push({
    type: incomeType,
    amount: incomeAmount,
    balance: total,
    dateTime: dateTime
});

// save the updated income list in local storage
localStorage.setItem("incomeList", JSON.stringify(incomeList));

// save the updated total balance in local storage
localStorage.setItem("totalBalance", total);
   
   // clear input fields
   document.getElementById('incomeType').value = "";   // clear type field
   document.getElementById('incomeAmount').value = ""; // clear amount field

}







// EXPENSE SECTION
// load existing data from  local storage
// get saved total expense from local storage, if exists; else start with zero.
let totalExp = Number(localStorage.getItem('totalExpense')) || 0;

// show total expense in the expense box
document.getElementById('totalExpense').innerHTML = `Rs ${totalExp} /-`;

// get saved expense list from local storage, if exists; else start with empty array.
let expenseList = JSON.parse(localStorage.getItem('expenseList')) || [];

// show(render) each saved expense row in the table
expenseList.forEach(item=>{
    // create a table row(<tr>)
    let tableRow = document.createElement("tr");

    // fill the row with data (type,amount,balance,date & time)
    tableRow.innerHTML = `
             <td class="border p-2">${item.type}</td>
        <td class="border p-2">Rs ${item.amount}</td>
        <td class="border p-2">Rs ${item.balance}</td>
        <td class="border p-2">${item.dateTime}</td>
    `;

    // add the row to the expense table body
    document.getElementById('expenseReceiptBody').appendChild(tableRow);
});



// function to add new expense
function addExpenses(){
    // get user input from fields
    const expenseType = document.getElementById('expenseType').value;  // type of income
    console.log(expenseType);
    const expenseAmount = Number(document.getElementById('expenseAmount').value);  // amount
    console.log(expenseAmount);

    // select the total expense
    const totalExpense = document.getElementById('totalExpense');

    // validations
    // if expenseAmount less than zero
    if(expenseAmount<0){
        alert("Enter valid amount");
        return;  // stop function
    }

    // check all fields are filled
    else if(expenseType==="" || expenseAmount===""){
        alert("please enter all fields");
        return;
    }

    else if(expenseAmount>total){
        alert("Insufficient balance");
        return;
    }

    else{
        // update the total and total expense
        total = total - expenseAmount;  // reduce balance
        totalExp = totalExp + expenseAmount; // increase expense
        alert("Expense added successfully");
        totalExpense.innerHTML = `Rs ${totalExp} /-`;  // show updated total expense
    }

    // get current date and time
    let dateAndTime = new Date().toLocaleString();

    // create a new table row (<tr>) for this expense
    let newTableRow = document.createElement("tr");  // creates one row
    newTableRow.innerHTML = `
      <td class="border p-2">${expenseType}</td>
      <td class="border p-2">Rs ${expenseAmount}</td>
      <td class="border p-2">Rs ${totalExp}</td>
      <td class="border p-2">${dateAndTime}</td>
       `;

       // append the new row at the end of the expense table
       document.getElementById('expenseReceiptBody').appendChild(newTableRow);  // adds next row below


       // save data to local storage
       // add this expense to the array
       expenseList.push({
        type : expenseType,
        amount : expenseAmount,
        balance : totalExp,
        dateTime : dateAndTime
       });

       // save the updated expense list in local storage
       localStorage.setItem("expenseList",JSON.stringify(expenseList));

       // save the updated total expense in local storage
       localStorage.setItem("totalExpense",totalExp);

       // clear input fields
       document.getElementById('expenseType').value = "";  // clear type field
       document.getElementById('expenseAmount').value = "";  // clear amount field
    
}




// clearAll function
function clearAll() {
    // Ask user for confirmation before clearing all data
    let userConfirmed = confirm("Are you sure you want to clear all data?");

    if (!userConfirmed) {
        // User pressed Cancel, do nothing
        // Exit the function immediately
        return;  
    } 
    else {
        // --- User pressed OK, proceed to clear everything ---

        // Remove all relevant data from localStorage
        // This deletes all saved income and expense data permanently
        localStorage.removeItem("incomeList");       // remove saved income records
        localStorage.removeItem("expenseList");      // remove saved expense records
        localStorage.removeItem("totalBalance");     // remove saved total balance
        localStorage.removeItem("totalExpense");     // remove saved total expense

        // Reset the JS variables used in the script
        // This is important so that new entries start from zero
        incomeList = [];   // clear the income array
        expenseList = [];  // clear the expense array
        total = 0;         // reset total balance
        totalExp = 0;      // reset total expense

        // Update the balance and expense boxes on the page
        // Without this, the displayed numbers would still show old values
        document.getElementById('totalBalance').innerHTML = `Rs ${total} /-`;       // update total balance box
        document.getElementById('totalExpense').innerHTML = `Rs ${totalExp} /-`;    // update total expense box

        // Remove all rows from the HTML tables
        // Setting innerHTML of the table body to empty clears all displayed rows
        document.getElementById('receiptBody').innerHTML = "";          // clear income table
        document.getElementById('expenseReceiptBody').innerHTML = "";   // clear expense table

        // Optional: give a message to user
        alert("All data cleared successfully!");  // show success message
    }
}



//  function logout
function logout(){
    // below line is to delete the login information. browser now forgets the logged-in user.
    localStorage.removeItem("loggedInUser");
    // when user pressed logout button it goes to login page
    window.location = './login.html';
}



