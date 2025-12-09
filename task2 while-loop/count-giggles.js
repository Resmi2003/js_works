// Count the giggles


var reply = "yes";
var giggles = 0;
var count = 0;

while(reply=="yes" && count<5){
    giggles++;
    console.log("Are you still giggling? (yes/no)");
    count++;
    
}

console.log(`That's ${giggles} giggles. You're hilarious!`);
