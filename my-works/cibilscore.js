var cibilScore = 700;

if(cibilScore>=300 && cibilScore<580){    // 700>=300 && 700<580   False
    console.log("POOR");
    
}

else if(cibilScore>=580 && cibilScore<670){   // 700>=580 && 700<670    False
    console.log("FAIR");
    
}

else if(cibilScore>=670 && cibilScore<740){     //  700>=670 && 700<740   True
    console.log("GOOD");   // prints GOOD
    
}

else if(cibilScore>=740 && cibilScore<800){
    console.log("VERY GOOD");
    
}

else if(cibilScore>=800 && cibilScore<=850){
    console.log("EXCELLENT");
    
}