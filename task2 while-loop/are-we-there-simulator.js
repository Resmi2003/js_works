// "Are we there yet?" simulator"



var answer = "no";
var count = 0;

while(answer!="yes"){
    console.log("Are we there yet?");
    count++;

    if(count==5){
        answer = "yes";
    }
    
}

console.log("Finally!");
