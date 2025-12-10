// Print :

// R  R  R  R
// R  S  S  R
// R  S  S  R
// R  R  R  R



for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(row==1 || row==4 || column==1 || column==4){

             pattern = pattern + "R\t";

        }

        else{

            pattern = pattern + "S\t";
        }

    }

    console.log(pattern);
    
}
