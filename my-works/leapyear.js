var year = 2045;
                                                                  // False                      // False
if(year%100==0 && year%400==0 || year%100!=0 && year%4==0){   // 2045%100==0 && 2045%400==0 || 2045%100!=0 && 2045%4==0  // False
    console.log("leap year");
    
}

else{
    console.log("not leap year");    // prints not leap year
    
}