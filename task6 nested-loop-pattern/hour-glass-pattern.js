// Hourglass Pattern

//   *  *  *  *  *
//    *  *  *  *
//       *   *
//         *
//       *   *
//    *  *  *  *
//    *  *  *  *  *

for(let row=1;row<=7;row++){

    let Pattern = "";


    for(let column=1;column<=9;column++){

        if(row==1 && column==1 || row==1 && column==3 || row==1 && column==5 || row==1 && column==7 || row==1 && column==9 || row==2 && column==2 || row==2 && column==4 || row==2 && column==6 || row==2 && column==8 || row==3 && column==3 || row==3 && column==7 || row==4 && column==5 || row==5 && column==3 || row==5 && column==7 || row==6 && column==2 || row==6 && column==4 || row==6 && column==6 || row==6 && column==8 || row==7 && column==1 || row==7 && column==3 || row==7 && column==5 || row==7 && column==7 || row==7 && column==9){
            Pattern += "*";
        }

        else{
            Pattern += " ";
        }
    }


    console.log(Pattern);
    
}

