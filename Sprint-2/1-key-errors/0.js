// Predict and explain first...
//  =============> it will not run because .slice(1) will cut one index.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// console.log(capitalise("adoum"))

// =============> write your explanation here
// 0.js:8 this the line where the problem is happening 
// THis is the actual line where the error is produced
// SyntaxError: Identifier 'str' has already been declared 
// This is the interpretation of the problem itself.

// =============> write your new code here
function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}
console.log(capitalise("adoum"));