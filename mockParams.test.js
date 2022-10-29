const { addition } = require("./addition");

test.each([
  [2, 4, 6],
  [1, 2, 3],
  [9, 9, 18],
])("a + b = c", (a, b, expected) => {
  expect(addition(a, b)).toBe(expected);
});
