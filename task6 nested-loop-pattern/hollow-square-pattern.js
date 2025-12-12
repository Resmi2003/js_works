// Hollow Square Pattern

//  *  *  *  *  *
//  *           *
//  *           *
//  *           *
//  *  *  *  *  *

for(let row=1;row<=5;row++){

    let Pattern = "";


    for(let column=1;column<=5;column++){

        if(row==1 || row==5 || column==1 || column==5){
            Pattern += "*  ";
        }

        else{
            Pattern += "   ";
        }
    }


    console.log(Pattern);
    
}