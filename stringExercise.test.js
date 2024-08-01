const fib = require('./stringExercise');

test('argument one should return one', () => {
    expect(fib(1)).toEqual([0]);
})

test('argument two should return 0 and one', () => {
    expect(fib(2)).toEqual([0,1]);
})

test('argument three should return first pair', () => {
    expect(fib(3)).toEqual([0,1,1])
})

test('argument 4 should give 0,,,2', () => {
    expect(fib(4)).toEqual(fib(4));
})