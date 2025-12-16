var word = "ABC123";
var challengeCode = "7YZ";

var result = word.concat(challengeCode);
console.log(result);


// A B C 1 2 3 7 Y Z
// 0 1 2 3 4 5 6 7 8

var maskedString = "";
var count = 1;
for(let i=0;i<result.length;i++){

    if(count==3){      // (i+1%3)==0 also possible
        
        maskedString += "X";
        count = 0;
    }

    else{
        maskedString += result[i];
    }
    count ++;
}

console.log(maskedString);


// datastructure[array,object,set]

// array
// define : var arr=[]   
// if we have to store and organize multiple objects with same or different type
// a datastructure
// keeps order
// duplicates allowed
// can be updated.mutable, we can change
// mutable => we can update after creaton.we can change after define.
// methods



//string
// define var name ="hari"
//keeps order
// duplicates allowed
// immutable
// methods


// set
// no order
// duplicate not allowed
//not have index
