var foodLogs = {} // dosa:1   // so this becomes foodLogs = { dosa : 1} 

var food = "dosa";

if(food in foodLogs){
    foodLogs[food] +=1;
}

else{
    
    foodLogs[food] = 1;
}

console.log(foodLogs);
