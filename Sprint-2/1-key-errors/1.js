// Predict and explain first...

// Why will an error occur when this program runs?
// =============> We are calling a constant. we should call/ invoke the function itself i.e. convertToPercentage

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> node says that line 9 is the location of the problem and the const decimale is already declared.After fixing the const to "Number" i tested it again and it loged the name Number. that is also wrong.  
// therefore, i deleted the parameter and kept the const and invoked the function in the console.log.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage()); // "50%"