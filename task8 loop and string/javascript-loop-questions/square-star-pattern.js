// Write a program using nested loops to print a square star pattern of size N:

//  * *
//  * *
//  * *

let n = 3;

for(let row=1;row<=n;row++){

    let pattern = "";


    for(let column=1;column<=2;column++){

        if(column==1 || column==2){
            pattern += "* ";
        }

        else{
            pattern += "  ";
        }
    }


    console.log(pattern);
    
}