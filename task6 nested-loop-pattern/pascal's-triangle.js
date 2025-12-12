// Pascal's Triangle

//       1
//     1   1
//   1   2   1
//  1  3   3   1

for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=7;column++){

        if(row==1 && column==4 || row==2 && column==3 || row==2 && column==5 || row==3 && column==2 || row==3 && column==6 || row==4 && column==1 || row==4 && column==7){
            pattern += "1 ";
        }

        else if(row==3 && column==4){
            pattern += "2 ";
        }

        else if(row==4 && column==3 || row==4 && column==5){
            pattern += "3 ";
        }

        else{
            pattern += "  ";
        }

    }


    console.log(pattern);
    
}