// 1   0   0   1
// 0   1   1   0
// 0   1   1   0
// 1   0   0   1

// 4 row , 4 column



for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(row==column || row+column==5){
            pattern = pattern + "1\t";

        }

        else{
            pattern = pattern + "0\t";
        }
    }

    console.log(pattern);
    
}