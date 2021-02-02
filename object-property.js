const students = [
    { id: 21, name: "Bappi Bro" }, { id: 31, name: "sovo Bro" }, { id: 41, name: "maruf Bro" }, { id: 51, name: "Dipjol Bro" }
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);