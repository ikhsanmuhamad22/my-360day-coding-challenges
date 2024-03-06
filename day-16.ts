// Day 16
// Get the mean of an array

const getAverage = (marks: number[]) =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);

console.log(getAverage([1, 2, 3, 4, 5]));
