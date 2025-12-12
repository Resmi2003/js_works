// Floyd's Triangle

//  1
//  2  3
//  4  5  6
//  7  8  9  10

for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(row==1 && column==1){
            pattern += "1 ";
        }

        else if(row==2 && column==1){
            pattern += "2 ";
        }

        else if(row==2 && column==2){
            pattern += "3 ";
        }

        else if(row==3 && column==1){
            pattern += "4 ";
        }

        else if(row==3 && column==2){
            pattern += "5 ";
        }

        else if(row==3 && column==3){
            pattern += "6 ";
        }

        else if(row==4 && column==1){
            pattern += "7 ";
        }

        else if(row==4 && column==2){
            pattern += "8 ";
        }

        else if(row==4 && column==3){
            pattern += "9 ";
        }

        else if(row==4 && column==4){
            pattern += "10 ";
        }

        else{
            pattern += "  ";
        }
    }


    console.log(pattern);
    
}

