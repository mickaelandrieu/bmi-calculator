const { getBMICategory } = require('../src/helpers/bmi');

test('value of Category for 25.64 is surpoids 🙁', () => {
    expect(getBMICategory(25.64)).toBe('surpoids 🙁');
  });