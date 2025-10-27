
// Predict and explain first BEFORE you run any code...


// this function should square any number but instead we're going to get an error

// =============> // the parameter is not relevant.

// function square(3) {
//     return num * num;
// }

// =============> js:9
// function square(3)
// SyntaxError: Unexpected number

// =============> puting 3 as a parameter is the reason of error. it should be more reusable and descriptive such as (num) 

// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
}

console.log(square(3));   