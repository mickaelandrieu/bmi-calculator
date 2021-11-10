const { getBMI } = require('../src/helpers/bmi');

test('value of BMI for 84kg/181cm is 25.64', () => {
  expect(getBMI(84, 1.81)).toBe(25.64);
});