// Pet parrot won't stop talking



var userChoice = "no";
var count = 0;

while(userChoice!=="yes" && count<3){
    console.log("Polly wants a cracker!");
    console.log("Do you want the parrot to stop? (yes/no)");
    count++;

    if(count==3){
        userChoice = "yes";
    }
    
}

console.log("Parrot stopped");
