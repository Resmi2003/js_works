// Write a javascript program using nested loops to print the following pattern

// 1
// 12
// 123
// 1234

 for(let row=1;row<=4;row++){
    
    let pattern = "";


    for(let column=1;column<=4;column++){

        if(column==1){
            pattern += "1";
        }

        else if(column==2 && row!=1){
            pattern += "2";
        }

        else if(column==3 && row!=1 && row!=2){
            pattern += "3";
        }

        else if(row==4 && column==4){
            pattern += "4";
        }

        else{
            pattern += " ";
        }
    }

    
    console.log(pattern);
    
 }