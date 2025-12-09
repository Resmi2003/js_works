// O   E   O   E
// O   E   O   E
// O   E   O   E

// 3 row, 4 column


for(let r=1;r<=3;r++){

    let pattern = "";


    for(let c=1;c<=4;c++){

        if(c==2 || c==4){                      // or if(col%2==0){ 
                                                // pattern+= "E "
                                                 // }
            pattern = pattern + "E ";          //   else{      
        }                                      // pattern+= "O "
                                               //    }                  
        else{
            pattern = pattern + "O ";
        }

    }

    console.log(pattern);
    

    

}