const add = require('./stringCalculator');

test('empty string should return 0' , () => {
    expect(add('')).toBe(0);
});

test('single number should return the number', () => {
    expect(add('2')).toBe(2);
})

test('two numbers should return their sum', () => {
    expect(add('2,4')).toBe(6);
})