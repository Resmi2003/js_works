// isLeap year



function isLeapYear(year){

    return year%100==0 && year%400==0 || year%100!=0 && year%4==0?true:false;
}



console.log(isLeapYear(2025));
