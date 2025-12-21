// Given two arrays, write a program to merge them into a single array.

var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8,9];
var mergedArray = [];

for(let i=0;i<arr1.length;i++){

    mergedArray.push(arr1[i]);
}

for(let i=0;i<arr2.length;i++){

    mergedArray.push(arr2[i]);
}

console.log("Merged Array =",mergedArray);
