// Day 10

// Convert a string to an array
const stringToArray = (string: string) => string.split(' ');

console.log(stringToArray('I love arrays they are my favorite'));

// Simple Fun #145: Table Game
// function tableGame(table: any) {
//   let result = [];
//   if (table[1][0] !== table[1][2]) {
//     result.push(table[0][0]);
//     result.push(table[0][2]);
//     result.push(table[2][0]);
//     result.push(table[2][2]);
//   } else {
//     result.push(-1);
//   }
//   return result;
// }

// console.log(
//   tableGame([
//     [1, 2, 1],
//     [1, 2, 1],
//     [1, 2, 1],
//   ])
// );
