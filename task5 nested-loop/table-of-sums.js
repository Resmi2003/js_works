// Print Table of Sums


for(let row=1;row<=3;row++){

    let pattern = "";


    for(let column=1;column<=3;column++){

        pattern = pattern + row + "+" + column + "=" + (row+column) + "\t";
    }

    console.log(pattern);
    
}