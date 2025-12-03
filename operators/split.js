var headCount = 4;
var total = 345;
var gst = 8;
 
var gstAmount = (gst/100)*total;
var billTotal = total + gstAmount;
var individualSplit = billTotal/headCount;
console.log(individualSplit);
