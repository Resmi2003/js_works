// Palindrome Checker (Interactive)


var word = "hello";
var count = 0;

while(word!="level"){
    console.log("Enter a word:");

   if(count==0){
    word = "cat";
    console.log("Try again.");
    
   }

   else if(count==1){
    word = "world";
    console.log("Try again.");
    
   }

   else{
    word = "level";
   }

   count++;
    
}


console.log("Palindrome found!");
