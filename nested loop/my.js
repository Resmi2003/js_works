for(let row=1;row<=2;row++){
    let pattern = "";

    for(let column=1;column<=2;column++){
        if(column==1){
            pattern += "0 ";
        }
        else{
            pattern+= "1 ";
        }
    }
    console.log(pattern);
    
}