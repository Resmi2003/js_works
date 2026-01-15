// display number in text box
function displayNumber(num){
    result.value += num;
}

// clear text box
function clearBox(){
    result.value = ""
}

// evaluate expression
function evaluateExp(){
    result.value = eval(result.value);  // eval() executes a string as Javascript code.eg: eval("2+3"); it's output is 5.   A String value that contains valid JavaScript code. Evaluates JavaScript code and executes it.
}

// Remove last item from text box
function removeLastItem(){
    result.value = result.value.slice(0,-1);
}


