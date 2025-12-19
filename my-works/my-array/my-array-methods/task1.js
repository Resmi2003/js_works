// Move all zeros to right and others to left

var numbers = [-1,0,-1,0,-1,0,-1,0,-1,-1];
var result = [];

for(let n of numbers){

    if(n<0){

        result.push(-1);
    }

    else{
        
        result.push(0);
    }
}



console.log(result);
