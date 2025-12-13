var word = "malayalam";
var result = "";

for(let i=8;i>=0;i--){

    result = result + word[i];
}

if(word==result){
    
    console.log("palindrome");
    
}

else{
    console.log("not palindrome");
    
}

