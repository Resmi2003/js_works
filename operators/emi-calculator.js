var loanAmount = 5000000;
var annualInterestRate = 9;
var loanTenure = 20;


var monthlyInterestRate = (annualInterestRate/12)/100;

var totalNumberOfMonths = loanTenure * 12;

 var onePlusMonthlyInterestRate = 1 + monthlyInterestRate;

 var exponent = (1 + monthlyInterestRate)**totalNumberOfMonths;

 var emi = (loanAmount * monthlyInterestRate * exponent) / (exponent - 1);

 var totalPayment = emi * totalNumberOfMonths;

 var totalInterest = totalPayment - loanAmount;


 console.log("emi", emi);
 console.log("total payment", totalPayment);
 console.log("total interest", totalInterest);
 
 
 

