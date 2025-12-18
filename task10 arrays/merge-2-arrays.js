// Merge Two Arrays
// Merge two arrays into a single array without using concat().

var array1 = [1,2,3];
var array2 = [4,5,6];
var merged = [];
var index = 0;

for(let i=0;i<array1.length;i++){
    merged[index]=array1[i];
    index++;
}



for(let i=0;i<array2.length;i++){
     merged[index]=array2[i];
     index++;
}



console.log("Merged array:",merged);
