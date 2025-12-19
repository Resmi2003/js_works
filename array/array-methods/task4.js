// Display duplicate numbers (very important question)

var arr = [10,11,12,12,13,14,15,15];
// index -  0  1  2  3  4  5  6  7
//          l  r

var left = 0;
var right = left+1;   // right=1 also same

while(left<arr.length-1){
    let difference = arr[right] - arr[left];
    if(difference==0){
        console.log(`${arr[left]}`);   // we can use arr[right] also. Same output will come. Because left and right is 12.
    }

     left++;
     right++;
}




