// Write a program to replace all spaces with a hyphen (-) in a string

let string = "hello world";
let result = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] == " "){
    result += "-";
    }
    
  else{
    result += string[i];
    }
}

console.log(result);