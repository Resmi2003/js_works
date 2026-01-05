var headCount = 4;    // headcount means total number of people.
var total = 345;    // here total is without gst
var gst = 8;    // in percentage
 
var gstAmount = (gst/100)*total;
var billTotal = total + gstAmount;
var individualSplit = billTotal/headCount;
console.log(individualSplit);


// price without gst is given and gst % is given
//  gst amount = total*(gst/100)

// bill total
// total+gst amount

// price with gst is given and gst % is given
// price without gst = total*gst/(100+gst)

// total
// bill total-gst amount

// individual split 
// bill total/head count
