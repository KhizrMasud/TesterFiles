const calculator = {
add: (a,b)=> {
    let answer = a + b
    return answer;
},
subtract: (a,b) => {
    let answer = a-b;
    return answer;
},
multiply: (a,b) => {
    let answer = a*b;
    return answer;
},
divide: (a,b) => {
    let answer = a/b;
    return answer;
}
};

module.exports = calculator;