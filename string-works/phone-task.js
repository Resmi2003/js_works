// last 4 digit X
// Make last 4 digit of phone number to X.

var phone = "7593006927";
// index-    01234567890
var slicedPhone = phone.slice(0,6);
console.log(slicedPhone);

var maskedPhone = slicedPhone.padEnd(10,"X");
console.log(maskedPhone);

