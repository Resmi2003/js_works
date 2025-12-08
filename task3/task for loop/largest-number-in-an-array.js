// Find the largest number in an array

let nums = [12,5,9,45,22];
let max = nums[0];

for(let i=1;i<nums.length;i++){

    if(nums[i]>max){

        max = nums[i];
    }



}

console.log(`Largest number = ${max}`);    // prints Largest number = 45


