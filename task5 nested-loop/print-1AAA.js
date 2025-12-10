// Print:

// 1  A  A  A 
// 1  1  A  A
// 1  1  1  A
// 1  1  1  1


for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(column==1 || row==4 || column==2 && row>=2 || column==3 && row>=3){
            pattern = pattern + "1\t";
        }

        else{
            pattern = pattern + "A\t";
        }
    }

    console.log(pattern);
    
}