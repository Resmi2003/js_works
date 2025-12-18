

var arr = [-1,0,-1,0,0,-1,0,0,-1];
// o/p = [-1,-1,-1,-1,0,0,0,0,0]

var result = [];

for(let n of arr){

    if(n<0){
        result.unshift(-1);
    }

    else{
        result.push(0);
    }
}

console.log(result);
