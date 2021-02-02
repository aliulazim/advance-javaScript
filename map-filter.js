//  Array Number square old version

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

//  Array Number square New version es6 Use Map

// const result = numbers.map(function(element, index, array) {
//     return element * element;
// })

// arrow function
const result = numbers.map(x => x * x);

console.log(result);

// Filter

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const isThere = numbers.find(x => x > 5);
console.log(isThere);