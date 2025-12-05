// Elevator game


var floor = 0;
var count =0;

while((floor<1 || floor>5) && count<5){
    console.log("This elevator doesn't go there!");
    console.log("Please enter a floor number (1 to 5)");
    count++;

}

if(count==5){
    floor = 3;
    console.log(`Going to floor ${floor}`);
    
}

