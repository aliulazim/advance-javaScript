// Global varible
let bonus = 44;


function sum(first, second) {
    const result = first + second + bonus;
    // console.log(result);
    // console.log(bonus);
    if (result > 9) {
        var mood = "Happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(7, 5);

// console.log(output);