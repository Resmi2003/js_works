 // pyramid
 
 // for row
for (let row = 1; row <= 5; row++) {

    let pattern = "";

    // for space
    for (let space = 1; space <= 5 - row; space++) {

        pattern += " ";
    }

     // for astrick
    for (let column = 1; column <= row; column++) {

        pattern += "* ";

    }

    console.log(pattern);

}