// *
// *   *
// *   *   *
// *   *   *   *
// *   *   *   *   *

// 5 row , 5 column


for(let row=1;row<=5;row++){

    let pattern = "";


    for(let column=1;column<=row;column++){     // column<=row used here because there is not 5 columns in each row. So columns depends on each row's number.OR CAN BE DONE INSIDE IF LIKE THIS.
        pattern += "* \t"
    }

    console.log(pattern);
    
}


