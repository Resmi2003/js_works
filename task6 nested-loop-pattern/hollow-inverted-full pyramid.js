// Hollow Inverted Full Pyramid

//   *  *  *  *  *
//    *        *
//      *    *
//        *       

for(let row=4;row>=1;row--){

    let pattern = "";


    for(let column=9;column>=1;column--){

        if(row==1 && column==5 || row==2 && column==3 || row==2 && column==7 || row==3 && column==2 || row==3 && column==8 || row==4 && column==1 || row==4 && column==3 || row==4 && column==5 || row==4 && column==7 || row==4 && column==9){
            pattern += "*";
        }

        else{
            pattern += " ";
        }
    }


    console.log(pattern);
    
}