// Day 9

// Find Maximum and Minimum Values of a List

const min = (list: number[]) => list.sort((a, b) => a - b)[0];

const max = (list: number[]) => list.sort((a, b) => b - a)[0];

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

// Are the numbers in order?
// my solution
const inAscOrder = (arr: number[]) => {
  return JSON.stringify(arr) == JSON.stringify(arr.sort((a, b) => a - b));
};

// barbar solution
function inAscOrderr(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
