// Hollow Diamond Pyramid

//             *
//           *   *
//         *       *
//       *           *
//         *       *
//           *   *
//             *

for(let row=1;row<=7;row++){

    let pattern = "";


    for(let column=1;column<=7;column++){

        if(row==1 && column==4 || row==2 && column==3 || row==2 && column==5 || row==3 && column==2 || row==3 && column==6 || row==4 && column==1 || row==4 && column==7 || row==5 && column==2 || row==5 && column==6 || row==6 && column==3 || row==6 && column==5 || row==7 && column==4){
            pattern += "* ";
        }

        else{
            pattern += "  ";
        }
    }


    console.log(pattern);
    
}