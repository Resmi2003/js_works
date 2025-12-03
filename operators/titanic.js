// titanic

var malePassengers = 869;
var femalePassengers = 412;
var survived = 492;

// total number of passengers
var addResult = malePassengers + femalePassengers;
console.log(addResult);

// number of unsurvived passengers
var subResult = addResult - survived;
console.log(subResult);
 
//survived percentage
var survivedPercentage = (survived/addResult)*100;
console.log(survivedPercentage);

//unsurvived percentage
var unsurvivedPercentage = (subResult/addResult)*100;
console.log(unsurvivedPercentage);



