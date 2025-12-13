var i =1800;

while(i<=2025){

    if(i%100==0 && i%400==0 || i%100!=0 && i%4==0){
        console.log(i);
        
    }


    i++;
}