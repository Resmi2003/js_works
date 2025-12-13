// Function that reverses a given string

function reverse(string){

    let result = "";
    for(i=string.length-1;i>=0;i--){
        result = result + string[i];
    }

    return result;
}

console.log(reverse("hello"));
