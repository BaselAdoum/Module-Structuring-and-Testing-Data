const movieLength = 87840; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // 6 variables 
// b) How many function calls are there?
    // 1
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // This gives us the remaining seconds after converting the total movie length into complete minutes.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    //This gives us the integer number of full minutes in the movie, excluding any partial minutes
// e) What do you think the variable result represents? Can you think of a better name for this variable?
    //it represents the formatted time of the film in hour, minute, seconds. A better name could be formattedTime.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // 8784 => 2:26:24
    //87 => 0:1:27
    //87840 => 24:24:0