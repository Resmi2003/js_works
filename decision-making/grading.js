var mark1 = 35;
var mark2 = 45;
var mark3 = 49;

var total = mark1 + mark2 + mark3;    // 35+45+49
console.log(`${total}`);              // prints 129


if(total>=140 && total<=150){    // 129>=140 && 129<=150   False
    console.log("Grade A");
    
}

else if(total>=130 && total<=140){    // 129>=130 && 129<=140   False
    console.log("Grade B");
    
}

else if(total>=120 && total<=130){    //  129>=120 && 129<=130   True
    console.log("Grade C");    // prints Grade C
    
}

else if(total<120){
    console.log("Failed");
    
}

