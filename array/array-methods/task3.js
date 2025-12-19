// Find first least positive missing number

var arr = [1,2,4,5];
// index - 0 1 2 3
//         l r

var left = 0;
var right = left+1;

while(left<arr.length-1){
    let difference = arr[right]-arr[left];
    if(difference!=1){
        console.log(`${arr[left]+1} is missing`);
        break;
        
    }
    left++;
    right++;
}
