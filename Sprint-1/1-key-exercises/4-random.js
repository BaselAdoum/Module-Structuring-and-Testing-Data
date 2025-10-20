const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
    // num is a random integer between 1 and 100, inclusive.

// Try breaking down the expression and using documentation to explain what it means
    // Math.floor round down to lower integer
    //Math.random generate a float from0 to 1 (1 not included)
    //+ minimum is to be sure 0 is not a value from random
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
    console.log(num);
        //26
        //12
        //89
        
