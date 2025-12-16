// palindrome using function

function isPalindrome(text){

    isPWord = true;
    let result = "";

    
    for(let i=text.length-1;i>=0;i--){
        result += text[i];
    }

    if(result!=text){
        isPWord = false;
    }

    return isPWord;
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("center"));

