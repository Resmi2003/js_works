// Print:

// A  B  C  D
// A  B  C  D
// A  B  C  D
// A  B  C  D


for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(column==1){
            pattern = pattern + "A\t";
        }

        else if(column==2){
            pattern = pattern + "B\t";
        }

        else if(column==3){
            pattern = pattern + "C\t";
        }

        else{
            pattern = pattern + "D\t"
        }
    }

    
    console.log(pattern);
    
}