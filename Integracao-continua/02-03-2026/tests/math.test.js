const math = require('../src/math');
test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('subtrair 3 - 2 igual a 1', () => {
    expect(math.subtract(3, 2)).toBe(1); 
})

test('multiplicar 2 x 3 igual a 6', () => {
    expect(math.multiply(2, 3)).toBe(6); 
})

test("subtrair 6/2 igual a 3", () => {
    expect(math.divide(6, 2)).toBe(3); 
})

