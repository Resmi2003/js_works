// Triangular 1s Pattern


for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(column==1 || row==4 || column==2 && row>=2 || column==3 && row>=3){
            pattern = pattern + "1\t";
        }

        else{
            pattern = pattern + "0\t";
        }
    }

    console.log(pattern);
    
}