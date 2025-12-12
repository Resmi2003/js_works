// Inverted Left Half Pyramid

// *  *  *  *  *  *
//    *  *  *  *  *
//          *  *  *
//             *  *
//                *

for(let row=1;row<=5;row++){

    let pattern = "";


    for(let column=1;column<=6;column++){

        if(row==1 || column==6 || row==2 && column>=2 || row==3 && column>=4 || row==4 && column>=5 || row==5 && column==6){
            pattern += "* ";
        }

        else{
            pattern += "  ";
        }
    }


    console.log(pattern);
    
}