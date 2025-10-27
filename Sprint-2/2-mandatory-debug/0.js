// Predict and explain first...

// =============> in line 6 we should rather write return (a * b) instead of console.log...

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// As predicted, the error was caused by puting console.log () inside the function's body
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// The result of multiplying 10 and 32 is 320