function findLargestNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}


test("finds largest of 1, 2, 3", () => {
  expect(findLargestNumber(1, 2, 3)).toBe(3);
});

test("finds largest of 10, 5, 8", () => {
  expect(findLargestNumber(10, 5, 8)).toBe(10);
});

test("finds largest of -1, -5, -3", () => {
  expect(findLargestNumber(-1, -5, -3)).toBe(-1);
});

test("works with equal numbers", () => {
  expect(findLargestNumber(7, 7, 7)).toBe(7);
});