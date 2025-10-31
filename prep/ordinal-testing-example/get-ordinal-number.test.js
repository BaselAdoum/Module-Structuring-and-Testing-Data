function getOrdinalNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }

  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  // Handle special cases 11th, 12th, 13th
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

module.exports = getOrdinalNumber;

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(21)).toEqual("21st");
});
