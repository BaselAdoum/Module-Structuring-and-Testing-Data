// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("should return number value for number cards (2-9)", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  const jackOfClubs = getCardValue("J♣");
  expect(jackOfClubs).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 10 for 10 card", () => {
  const tenOfHearts = getCardValue("10♥");
  expect(tenOfHearts).toEqual(10);
});
// Case 5: Handle Invalid Cards:
test("should return 'Invalid card' for invalid card rank", () => {
  const invalidCard = getCardValue("X♠");
  expect(invalidCard).toEqual("Invalid card");
});
