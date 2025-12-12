// Right Half Pyramid

/*

*
*  *
*  *  *
*  *  *  *  *
*  *  *  *  *  *

*/

for(let row=1;row<=5;row++){

    let pattern = "";


    for(let column=1;column<=6;column++){

        if(column==1 || row==5 || column==2 && row>=2 || column==3 && row>=3 || row==4 && column<=5){
            pattern = pattern + "* ";
        }
    }

    console.log(pattern);
    
}