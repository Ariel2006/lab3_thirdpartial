const { factorial, fibonacci } = require('./math');

test('factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial of 5 should be 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial of negative number should be undefined', () => {
    expect(factorial(-3)).toBeUndefined();
});

test('fibonacci of 0 should be 0', () => {
    expect(fibonacci(0)).toBe(0);
});

test('fibonacci of 6 should be 8', () => {
    expect(fibonacci(6)).toBe(8);
});

test('fibonacci of negative number should be undefined', () => {
    expect(fibonacci(-2)).toBeUndefined();
});
