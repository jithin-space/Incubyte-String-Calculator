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
    expect(add('2\n4')).toBe(6);
    expect(add('2\n4,5\n7,8\n')).toBe(26);
})

test('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3); 
    expect(add('//|\n1|2|3')).toBe(6); //
})

test('throws an exception for negative numbers', () =>  {
    expect(() => add('-2')).toThrow('Negatives not allowed: -2');
    expect(() => add('2,-4,5,-6')).toThrow('Negatives not allowed: -4,-6');
})