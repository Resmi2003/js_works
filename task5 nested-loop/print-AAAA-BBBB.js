// Print:

// A  A  A  A
// B  B  B  B
// C  C  C  C
// D  D  D  D


for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(row==1){
            pattern = pattern + "A\t";
        }

        else if(row==2){
            pattern = pattern + "B\t";
        }

        else if(row==3){
            pattern = pattern + "C\t";
        }

        else{
            pattern = pattern + "D\t";
        }
    }


    console.log(pattern);
    
}