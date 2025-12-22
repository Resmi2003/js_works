// print common elements in arr1,arr2

var arr1 = [10,11,12,20,30];
var arr2 = [7,8,11,15,20,25];

for(let num of arr1){

    if(arr2.includes(num)){
        console.log(num);
        
    }
}