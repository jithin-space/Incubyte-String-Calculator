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

test('multiple numbers should return their sum', () => {
    expect(add('2,4,5,7,8')).toBe(26);
})

test('newline should be treated as a delimiter', () => {
    expect('2\n,4').toBe(6);
    expect('2\n,4,5\n,7,8\n').toBe(26);
})