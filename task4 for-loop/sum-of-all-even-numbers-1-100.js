// Sum of all even numbers between 1 and 100

var sum=0;

for(let i=1;i<=100;i++){

    if(i%2==0){
        sum = sum + i;
    }
}

console.log(`Sum = ${sum}`);
