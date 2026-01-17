// function display numbers, alphabets and symbols
function display(key){
    result.value += key;
}

// backspace
function backspace(){
    result.value = result.value.slice(0,-1);
}

// space
function space(){
    result.value += " ";
}

// caps
let capsOn = false;
function caps(){
    if(capsOn==false){
        capsOn = true;
    }
    else{
        capsOn = false;
    }
}

function displayLetter(letter){
    if(capsOn==true){
        result.value += letter.toUpperCase();
    }
    else{
        result.value += letter.toLowerCase();
    }
}

// enter
function enter(){
    result.value += "\n";
}

