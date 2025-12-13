// hollow pyramid


for(let row=1;row<=5;row++){

    let pattern = "";


    for(let column=1;column<=9;column++){

        if((row==5 && column%2!=0) || row+column==6 || column-row==4){
            pattern += "*";
        }

        else{
            pattern += " ";
        }
    }


    console.log(pattern);
    
}