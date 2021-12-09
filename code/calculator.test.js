const calculator = require('./calculator.js');

test('calculatorAdd', () =>{
    expect(calculator.add(1,2)).toBe(3);
})
test('calculatorSubtract', () =>{
    expect(calculator.subtract(3,2)).toBe(1);
})
test('calculatorSubtract', () =>{
    expect(calculator.divide(3,2)).toBe(1.5);
})
test('calculatorSubtract', () =>{
    expect(calculator.multiply(3,2)).toBe(6);
})