var word = "racecar";
var result = "";

for(let i=6;i>=0;i--){      // here we used i=6 because we used indexing that is 0,1,2,3,4,5,6,7,8.......so r is zero, a is 1 like that we took.

    result = result + word[i];
}

console.log(result);
