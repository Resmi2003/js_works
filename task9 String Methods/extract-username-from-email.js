// Write a javascript program to extract the username from an email ID.

function extractUsername(emailId){

    let newEmail = emailId.split("@");

    return newEmail[0];
}

    
console.log(extractUsername("user@gmail.com"));
