// // Implement a function isProperFraction
// // Write assertions for your function to check it works in different cases
// // Terms:
// // Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// // Written here like this: 1/2 == Numerator/Denominator
// // the first test and first case is written for you
// // complete the rest of the tests and cases
// // write one test at a time, and make it pass, build your solution up methodically

// function isProperFraction(numerator, denominator) {
//   if (numerator < denominator) {
//     return true;
//   }
// }

// // The line below allows us to load the isProperFraction function into tests in other files.
// // This will be useful in the "rewrite tests with jest" step.
// module.exports = isProperFraction;

// // here's our helper again
// function assertEquals(actualOutput, targetOutput) {
//   console.assert(
//     actualOutput === targetOutput,
//     `Expected ${actualOutput} to equal ${targetOutput}`
//   );
// }

// // Acceptance criteria:

// // Proper Fraction check:
// // Input: numerator = 2, denominator = 3
// // target output: true
// // Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
// const properFraction = isProperFraction(2, 3);
// assertEquals(properFraction, true);

// // Improper Fraction check:
// // Input: numerator = 5, denominator = 2
// // target output: false
// // Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
// const improperFraction = isProperFraction(5, 2);
// assertEquals(improperFraction, false);

// // Negative Fraction check:
// // Input: numerator = -4, denominator = 7
// // target output: true
// // Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
// const negativeFraction = isProperFraction(-4, 7);
// // ====> complete with your assertion

// // Equal Numerator and Denominator check:
// // Input: numerator = 3, denominator = 3
// // target output: false
// // Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// const equalFraction = isProperFraction(3, 3);
// // ====> complete with your assertion

// // Stretch:
// // What other scenarios could you test for?




function isProperFraction(numerator, denominator) {
  // Case 1: Proper fraction (numerator < denominator)
  if (numerator < denominator) {
    return true;
  }
  // Case 2: Improper fraction (numerator >= denominator)
  else if (numerator >= denominator) {
    return false;
  }
}

module.exports = isProperFraction;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}


// Case 1: Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Case 2: Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Case 3: Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

// Case 4: Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

// Case 5: Zero Numerator check:
// Input: numerator = 0, denominator = 5
// target output: true
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true);

// Case 6: Negative Denominator check:
// Input: numerator = 2, denominator = -3
// target output: false
const negativeDenominator = isProperFraction(2, -3);
assertEquals(negativeDenominator, false);

// Test console logs to see the results
console.log(isProperFraction(2, 3));
console.log(isProperFraction(5, 2));
console.log(isProperFraction(-4, 7));
console.log(isProperFraction(3, 3));
console.log(isProperFraction(0, 5));
console.log(isProperFraction(2, -3));

