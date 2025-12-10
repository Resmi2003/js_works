// Cross Pattern


for(let row=1;row<=5;row++){

    let pattern = "";


    for(let column=1;column<=5;column++){

        if(row==3 || column==3){
            pattern = pattern + "1\t";
        }

        else{
            pattern = pattern + "0\t";
        }
    }

    console.log(pattern);
    
}
