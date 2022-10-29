const { addition } = require("./addition");

// Expected Behaviour
test("Should return the sum of two numbers (2 + 3 = 5)", () => {
  const result = addition(2, 3);
  expect(result).toBe(5);
});

test("Should return the sum of two numbers (5 + 2 = 7)", () => {
  const result = addition(5, 2);
  expect(result).toBe(7);
});

test.skip('1 + 5', () => {
  const result = addition(1 + 5);
  expect(result).toBe(6);
})
