var num = 45;

if(num>0){ //check if 45 greater than zero 45>0    // True
    console.log(`${num} is positive`);  //if 45>0 then print 45 is positive
    
}

else if(num<0){  //check if 45<0 // False
    console.log(`${num} is negative`); //if 45<0 then print 45 is negative
    
}

else if(num==0){ //check if 45=0 //False
    console.log(`${num} is zero`); //if 45=0 then print 45 is zero
    
}

else{
    console.log("Invalid"); //if above 3 conditions not works,then invalid will print
    
}