/* var string={
length,     // attribute
toUpperCase(){},       // converts to uppercase letter
toLowerCase(){},       // converts to lowercase letter
charAt(index){}        // return character at specified index. If not put index then defaultly it calls first letter ,that is in the 0th position letter.
at(index){}            // same as charAt.but also support negative index.
concat(value)          // add new values to a word or sentence (it will add in end)
slice(start,end)       // to extract a part from string. Support negative index.
substr (str means string)  // same as slice. But don't support negative index.
trim()                    // to remove white space from string...eliminate slash key in \t tab space, \n new space , like that things eliminate. Removes left and right space. Not remove from middle;only remove left and right space.
trimStart()               // only remove left space
trimEnd()                 // only remove right space.
padEnd()      // if there are 25 company names,but 16 only there so for remaining we can set characters. only for right side.
padStart()
*/ 


// negative index- 76543210987654321(17 negative indexes)
var companyName = " Luminar Technolab ";
// positive index  01234567890123456  = 17 characters total

var companyName2 = "Luminar";

console.log(companyName.length);

console.log(companyName.toUpperCase());  // no need to put value inside uppercase bracket.because we dont set parameter here.

console.log(companyName.toLowerCase());

console.log(companyName.charAt(2));

console.log(companyName.at(-2));

console.log(companyName.concat(".com",".edu"));   // Any number of string can be concatinated.

console.log(companyName.slice(0,7));   // prints luminar. actually only 6 for luminar. But we take 7 because 6 only takes 5. So take one extra always.

console.log(companyName.slice(8,17));   // prints technolab. actually 16 for technolab, but we took 17 because 16 only takes 15.If put 18, then also Technolab came because it will stop in end.

console.log(companyName.slice(-3));  // so prints lab

console.log(companyName.substring(0,8));  // prints Luminar

console.log(`new string:${companyName.trim()}....`);  // prints new string:Luminar Technolab....

console.log(`new string:${companyName.trimStart()}....`);   // only removes left space. prints new string:Luminar Technolab ....

console.log(`new string:${companyName.trimEnd()}....`);   // only removes right space. prints new string: Luminar Technolab....

console.log(companyName.padEnd(25,"$"));
















