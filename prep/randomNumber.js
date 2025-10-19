// const startDay = 1;
// const endDay = 7;

// const randomDay = Math.floor(Math.random() * (endDay - startDay + 1)) + startDay;

// // In this program, each number between 1 and 7 represents a day of the week.
// // 1 = Monday, 2 = Tuesday, ... , 7 = Sunday

// console.log(`Your lucky day number is: ${randomDay}`);

// const fileName = "document.pdf";
// const extension = fileName.split(".")[1];
// // console.log(fileName)
// console.log(extension)
// console.log(fileName)

const totalSecondsCoded = 9365; // total time spent coding in seconds

const remainingSeconds = totalSecondsCoded % 60;
const totalMinutes = (totalSecondsCoded - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24; // Hours left after counting full days
const totalDays = Math.floor(totalHours / 24); // Full days only

const codingTimeFormatted = `${totalDays}D ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
console.log(codingTimeFormatted);
