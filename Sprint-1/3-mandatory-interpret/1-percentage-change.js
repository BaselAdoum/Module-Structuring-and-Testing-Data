let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", " "));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //carPrice = Number(carPrice.replaceAll(",", ""));
    //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
    //console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // £3.99  this is the result which is not a percentage. VSC showing me a mistake in line 5 where a comma is missing.
// c) Identify all the lines that are variable reassignment statements
    //carPrice = Number(carPrice.replaceAll(",", ""));
    //priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", " "));
// d) Identify all the lines that are variable declarations
    // let carPrice = "10,000";
    // let priceAfterOneYear = "8,543";

    // carPrice = Number(carPrice.replaceAll(",", ""));
    // priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", " "));

    // const priceDifference = carPrice - priceAfterOneYear;
    // const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    //It removes commas from the string numbers "10,000" and "8,543" to get "10000" and "8543"