/*
//rows
5  *   *   *   *   *  col(5)
4  *   *   *   *   col(4)
3  *   *   *      col(3)
2  *   *      col(2)
1  *     col(1)

*/

// 5 row,5 column


for(let row=5;row>=1;row--){

    let pattern = "";


    for(let column=1;column<=row;column++){          //OR INSIDE IF PUT ROW + COLUMN <= 5

        pattern += "* \t"



    }

    console.log(pattern);
    
}






