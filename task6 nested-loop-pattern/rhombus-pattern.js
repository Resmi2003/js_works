// Rhombus Pattern

// *  *  *  *
//  *  *  *  *
//   *  *  *  *
//    *  *  *  *
//     *  *  *  *
//      *  *  *  *

for(let row=1;row<=6;row++){

    let pattern = "";


    for(let column=1;column<=12;column++){

        if(row==1 && column==1 || row==1 && column==3 || row==1 && column==5 || row==1 && column==7 || row==2 && column==2 || row==2 && column==4 || row==2 && column==6 || row==2 && column==8 || row==3 && column==3 || row==3 && column==5 || row==3 && column==7 || row==3 && column==9 || row==4 && column==4 || row==4 && column==6 || row==4 && column==8 || row==4 && column==10 || row==5 && column==5 || row==5 && column==7 || row==5 && column==9 || row==5 && column==11 || row==6 && column==6 || row==6 && column==8 || row==6 && column==10 || row==6 && column==12){
            pattern += "* ";
        }

        else{
            pattern += " ";
        }
    }


    console.log(pattern);
    
}

