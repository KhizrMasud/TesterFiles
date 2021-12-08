
const capitalize = require('./capitalize');

test('expect a to be A', () =>{
    expect(capitalize('a')).toBe('A');
})

test('expect alphabet to be Alphabet', () =>{
    expect(capitalize('a')).toBe('A');
})
;