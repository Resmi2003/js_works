var ch = "$";   // ch=$

if(ch>="a" && ch<="z" || ch>="A" && ch<="Z"){     // $>=a && $<=z || $>=A && $<=Z     False
    console.log("It is a letter.");
    
}

else if(ch>=0 && ch<=9){       // $>=0 && $<=9   False
    console.log("It is a digit.");
    
}

else{
    console.log("It is a special character.");      //  prints It is a special character.
    
}