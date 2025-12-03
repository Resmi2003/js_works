var mark1 = 40;
var mark2 = 42;
var mark3 = 44;

var total = mark1 + mark2 + mark3;   // 40+42+44
console.log(`${total}`);    // prints 126

if(total>=140 && total<=150){     // 126>=140 && 126<=150    False
    console.log("Grade A");
    
}

else if(total>=130 && total<=140){     // 126>=130 && 126<=140    False
    console.log("Grade B");
    
}

else if(total>=120 && total<=130){     // 126>=120 && 126<=130    True
    console.log("Grade C");     //  prints Grade C
    
}

else if(total<120){
    console.log("Failed");
    
}