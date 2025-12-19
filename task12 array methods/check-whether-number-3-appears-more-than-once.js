// Given the array [1,3,5,3,7,3], check whether the number 3 appears more than once.

var numbers = [1,3,5,3,7,3];
var count = 0;

for(let n of numbers){

    if(n==3){
        count++;
    }
}

if(count>1){
    console.log("3 appears more than once");
}

else{
    console.log("3 does not appear more than once");
}


  