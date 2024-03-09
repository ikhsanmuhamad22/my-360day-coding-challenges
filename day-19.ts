// Day 19
// Sum Mixed Array

const sumMix = (x: (number | string)[]) =>
  x.length === 1 ? Number(x[0]) : x.reduce((a, b) => Number(a) + Number(b));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
