// Write a javascript program using nested loops to print a multiplication table from 1 to 5


for(let row=1;row<=5;row++){
    
    let pattern = "";


    for(let column=1;column<=5;column++){

        pattern += column + "*" + row + "=" + (column*row) + "\t";


    }

    console.log(pattern);
    
}