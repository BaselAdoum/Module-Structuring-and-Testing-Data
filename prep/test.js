// // // Testing preparation part of week 5

// // // const calculation = 10 + 32;
// // // const result = 42;
// // // console.assert(calculation === result);
// // function formatAs12HourClock(time24h) {
// //     // Split into hours and minutes
// //     const [hoursStr, minutes] = time24h.split(":");
// //     let hours = parseInt(hoursStr);
// //     // Determine AM/PM period
// //     let period;
// //     if (hours >= 0 && hours < 12) {
// //         period = "am";
// //     } else {
// //         period = "pm";
// //     }
// //     // Convert hours according to pattern
// //     let convertedHours;
// //     if (hours === 0) {
// //         // Midnight: 00 → 12
// //         convertedHours = 12;
// //     } else if (hours > 12) {
// //         // Afternoon/evening: 13-23 → 1-11
// //         convertedHours = hours - 12;
// //     } else {
// //         // Morning and noon: 1-12 stay as-is
// //         convertedHours = hours;
// //     }
// //     // Format the result (keep leading zero for hours 01-09 in AM)
// //     if (period === "am" && convertedHours < 10 && convertedHours !== 12) {
// //         return `0${convertedHours}:${minutes} ${period}`;
// //     } else {
// //         return `${convertedHours}:${minutes} ${period}`;
// //     }
// // }
// // // Test the implementation
// // // console.log(formatAs12HourClock("09:00"));  // "09:00 am"
// // // console.log(formatAs12HourClock("14:19"));  // "2:19 pm"
// // // console.log(formatAs12HourClock("00:30"));  // "12:30 am"
// // // console.log(formatAs12HourClock("12:15"));  // "12:15 pm"
// // // console.log(formatAs12HourClock("05:45"));  // "05:45 am"
// // // console.log(formatAs12HourClock("23:59"));  // "11:59 pm"
// // // // function formatAs12HourClock() {}
// // // console.assert(formatAs12HourClock("08:00") === "08:00 am");

// // function formatAs12HourClock(time) {
// //   return `${time} am`;
// // }

// // const currentOutput = formatAs12HourClock("08:00");
// // const targetOutput = "08:00 pm";
// // console.assert(
// //   currentOutput === targetOutput,
// //   `current output: ${currentOutput}, target output: ${targetOutput}`
// // );
// function formatAs12HourClock(time) {
//   return `${time} am`;
// }

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );

// const currentOutput = formatAs12HourClock("23:00");
// const targetOutput = "11:00 pm";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );
function checkDivisibility(a, b) {
  if (a % b === 0) {
    return `${a} is divisible by ${b}`;
  }

  return `${a} is not divisible by ${b}`;
}

console.log(checkDivisibility(10, 2));
console.log(checkDivisibility(50, 3));