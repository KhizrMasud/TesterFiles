const calculator = require('./calculator.js');

test('calculator', () =>{
    expect(calculator.add(1,2)).toBe(3);
})
