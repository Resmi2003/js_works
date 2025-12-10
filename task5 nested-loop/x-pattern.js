// X-Pattern with 1s

let n = 5;
for(let row=1;row<=n;row++){

    let pattern = "";


    for(let column=1;column<=n;column++){
        
        if(row==column || row+column==6){
            pattern = pattern + "1\t";
        }

        else{
            pattern = pattern + "0\t";
        }
    }

    console.log(pattern);
    
}