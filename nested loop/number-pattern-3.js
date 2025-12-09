for(let r=1;r<=4;r++){

    let pattern = "";


    for(let c=1;c<=4;c++){

        if(r==c){
            pattern = pattern + "1  "    // or 1 + "\t" or "0\t" for space
        }

        else{
            pattern = pattern + "0  "
        }
    }

    console.log(pattern);
    
}
