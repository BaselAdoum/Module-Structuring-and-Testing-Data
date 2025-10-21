const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
    // const penceStringWithoutTrailingP deletes the p at the end of the string and gives a new string.
    //paddedPenceNumberString takes that new string and makes sure it is at leas 3 digits (i ncase needed fill the gap with 0 from the left)
    // pounds is a variable that take the first index and declare it as pound.
    //pence is a variable that takes the last 2 digits and declares them as pence with the option of adding 0 in case needed.
    // console.log give the price with . and with the currency tag (£3.99). 
