
// IDK if this is the correct way to calculate the Energy. Please don't be harsh on me. I suck at Physics 

const { emc2 } = require("./EinsteinEq");

test.each([[2, 180000000000000000], [3, 270000000000000000]])("mass, energy", (mass, expected) => {
  expect(emc2(mass)).toBe(expected);
});
