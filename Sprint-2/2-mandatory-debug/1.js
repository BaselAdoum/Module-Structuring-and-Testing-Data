// Predict and explain first...
//  =============> we can not separate return from the a+ b. and there should be brackets around a+b. 

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> as expected, the error was cause by seperating a+b from return and not put a brackets around the values.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return (a + b);
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
