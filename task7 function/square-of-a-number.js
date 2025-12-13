// Square of a number

function square(number){

    let result = 0;
    for(i=0;i<number;i++){
        result = result + number;
    }

    return result;
}

console.log(square(6));
