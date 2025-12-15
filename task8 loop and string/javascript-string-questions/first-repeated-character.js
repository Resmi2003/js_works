// Write a javascript program to find the first repeated character in a string

let string = "hello";

for (let i = 0; i < string.length; i++) {
    
  if (string.indexOf(string[i]) != i) {
    
    console.log(string[i]);
    break;
  }
}