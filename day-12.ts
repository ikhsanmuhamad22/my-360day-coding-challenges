// Day 12

// Array plus array
// my solution
const arrayPlusArray = (arr1: number[], arr2: number[]) =>
  arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);

// simple solution
const arrayPlusArrayy = (arr1: number[], arr2: number[]) =>
  arr1.concat(arr2).reduce((a, b) => a + b);
console.log(arrayPlusArrayy([0, 0, 0], [4, 5, 6]));
