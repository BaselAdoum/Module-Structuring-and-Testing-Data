// Test 5: Custom function
function multiply(a, b) {
  return a * b;
}

test("multiply function works correctly", () => {
  expect(multiply(3, 4)).toBe(12);
 
});
test("multiply function works correctly", () => {
  
  expect(multiply(5, 0)).toBe(0);
  
});
test("multiply function works correctly", () => {
 
  expect(multiply(-1, 5)).toBe(-5);
});
