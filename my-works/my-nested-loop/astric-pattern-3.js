// *   *   *   *
// *   *   *
// *   *
// *


for(let row=1;row<=4;row++){

    let pattern = "";


    for(let column=1;column<=4;column++){

        if(row+column<=5){
            pattern += "* \t"
        }
    }


    console.log(pattern);
    
}