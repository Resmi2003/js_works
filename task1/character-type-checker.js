var character = "$";   // character=$

if(character>="a" && character<="z" || character>="A" && character<="Z"){     // $>=a && $<=z || $>=A && $<=Z     False
    console.log("It is a letter.");
    
}

else if(character>=0 && character<=9){       // $>=0 && $<=9   False
    console.log("It is a digit.");
    
}

else{
    console.log("It is a special character.");      //  prints It is a special character.
    
}