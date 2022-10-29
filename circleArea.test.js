// 2pi-r

const { circleArea } = require("./circleArea");

test.each([[2, 12.566370614359172], [3, 18.84955592153876]])("radius, area", (radius, expected) => {
  expect(circleArea(radius)).toBe(expected);
});
