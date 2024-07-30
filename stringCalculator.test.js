const add = require('./stringCalculator');

test('empty string should return 0' , () => {
    expect(add('')).toBe(0);
});