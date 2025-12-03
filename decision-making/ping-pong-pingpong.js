var num = 4;         //(previously 15 used here instead of 4)

if(num%15==0){ // 4%15==0   False
    console.log("pingpong"); 
    
}

else if(num%5==0){  //4%5==0  False
    console.log("pong");
    
}

else if(num%3==0){ //4%3==0 False
    console.log("ping"); 
    
}

else{
    console.log("invalid"); //above 3 conditions not worked.so prints invalid in output
    
}