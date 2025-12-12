// Inverted Right Half Pyramid

// *  *  *  *  *  *
// *  *  *  *  *
// *  *  *
// *  *
// *

for(let row=1;row<=5;row++){

    let pattern = "";


    for(let column=1;column<=6;column++){

        if(row==1 || column==1 || row==2 && column<=5 || column==2 && row<=4 || column==3 && row<=3){
            pattern += "* ";
        }

        else{
            pattern += "  ";
        }
    }

    console.log(pattern);
    
}