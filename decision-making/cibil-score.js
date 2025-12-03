var cibilScore = 849;

if(cibilScore>=300 && cibilScore<580){    // 849>=300 && 849<580   False
    console.log("POOR");   
    
}

else if(cibilScore>=580 && cibilScore<670){    // 849>=580 && 849<670   False
    console.log("FAIR");
    
}

else if(cibilScore>=670 && cibilScore<740){    // 849>=670 && 849<740   False
    console.log("GOOD");
    
}

else if(cibilScore>=740 && cibilScore<800){    // 849>=740 && 849<800    False
    console.log("VERY GOOD");
    
}

else if(cibilScore>=800 && cibilScore<=850){    // 849>=800 && 849<=850   True
    console.log("EXCELLENT");    // prints EXCELLENT
    
}

else{
    console.log("INVALID");
    
}