// // This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// // You will need to implement a function getCardValue
// // the function takes a single parameter, a string representing a playing card
// // the function should return the numerical value of the card
// // the first test and first case is written for you
// // complete the rest of the tests and cases
// // write one test at a time, and make it pass, build your solution up methodically
// // just make one change at a time -- don't rush -- programmers are deep and careful thinkers
// function getCardValue(card) {
//   if (rank === "A") {
//     return 11;
//   }
// }

// // The line below allows us to load the getCardValue function into tests in other files.
// // This will be useful in the "rewrite tests with jest" step.
// module.exports = getCardValue;

// // You need to write assertions for your function to check it works in different cases
// // we're going to use this helper function to make our assertions easier to read
// // if the actual output matches the target output, the test will pass
// function assertEquals(actualOutput, targetOutput) {
//   console.assert(
//     actualOutput === targetOutput,
//     `Expected ${actualOutput} to equal ${targetOutput}`
//   );
// }
// // Acceptance criteria:

// // Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// // When the function getCardValue is called with this card string as input,
// // Then it should return the numerical card value
// const aceofSpades = getCardValue("A♠");
// assertEquals(aceofSpades, 11);

// // Handle Number Cards (2-10):
// // Given a card with a rank between "2" and "9",
// // When the function is called with such a card,
// // Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
// const fiveofHearts = getCardValue("5♥");
// // ====> write your test here, and then add a line to pass the test in the function above

// // Handle Face Cards (J, Q, K):
// // Given a card with a rank of "10," "J," "Q," or "K",
// // When the function is called with such a card,
// // Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// // Handle Ace (A):
// // Given a card with a rank of "A",
// // When the function is called with an Ace,
// // Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// // Handle Invalid Cards:
// // Given a card with an invalid rank (neither a number nor a recognized face card),
// // When the function is called with such a card,
// // Then it should throw an error indicating "Invalid card rank."

function getCardValue(card) {
  const rank = card.slice(0, -1);

  // Case 1: Ace
  if (rank === "A") {
    return 11;
  }
  // Case 2: Number cards (2-9)
  else if (rank >= "2" && rank <= "9") {
    return parseInt(rank);
  }
  // Case 3: Face cards and 10 (J, Q, K, 10)
  else if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }
  // Case 4: Invalid cards
  else {
    return "Invalid card";
  }
}

module.exports = getCardValue;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Case 1: Ace
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Case 2: Number Cards (2-9)
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

const twoOfClubs = getCardValue("2♣");
assertEquals(twoOfClubs, 2);

const nineOfDiamonds = getCardValue("9♦");
assertEquals(nineOfDiamonds, 9);

// Case 3: Face Cards and 10
const tenOfHearts = getCardValue("10♥");
assertEquals(tenOfHearts, 10);

const jackOfClubs = getCardValue("J♣");
assertEquals(jackOfClubs, 10);

const queenOfDiamonds = getCardValue("Q♦");
assertEquals(queenOfDiamonds, 10);

const kingOfSpades = getCardValue("K♠");
assertEquals(kingOfSpades, 10);

// Case 4: Invalid Cards
const invalidCard = getCardValue("X♠");
assertEquals(invalidCard, "Invalid card");

const anotherInvalidCard = getCardValue("1♥");
assertEquals(anotherInvalidCard, "Invalid card");

// Test console logs to see all results
console.log(getCardValue("A♠"));
console.log(getCardValue("5♥"));
console.log(getCardValue("10♥"));
console.log(getCardValue("J♣"));
console.log(getCardValue("Q♦"));
console.log(getCardValue("K♠"));
console.log(getCardValue("X♠"));
console.log(getCardValue("1♥"));