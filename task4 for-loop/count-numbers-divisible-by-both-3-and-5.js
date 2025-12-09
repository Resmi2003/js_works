// Count how many numbers between 1 and 200 are divisible by both 3 and 5

var count = 0;

for(let i=1;i<=200;i++){

    if(i%3==0 && i%5==0){
        count++;
    }
}

console.log(`Count = ${count}`);
