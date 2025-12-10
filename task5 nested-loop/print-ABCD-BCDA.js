// Print:

// A  B  C  D
// B  C  D  A
// C  D  A  B
// D  A  B  C

for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(row+column==6 || column==1 && row==1){
            pattern = pattern + "A\t";
        }

        else if(row+column==4 || column==4 && row==4){
            pattern = pattern + "C\t";
        }

        else if(row+column==5){
            pattern = pattern + "D\t";
        }

        else{
            pattern = pattern + "B\t";
        }


    }


    console.log(pattern);
}