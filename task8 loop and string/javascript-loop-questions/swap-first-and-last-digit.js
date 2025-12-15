// Write a program using for or while loop to swap the first and last digit of a given number

var num = "1234";
var i = 0;
var result = "";

while (i < num.length) {

  if (i == 0) {
    result += num[num.length - 1];
  } 
   
  else if (i == num.length - 1) {
    result += num[0];
  } 

  else {
    result += num[i];
  }

  i++;
}

console.log(result);