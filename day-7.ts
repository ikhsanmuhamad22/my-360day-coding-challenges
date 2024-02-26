// Day 7

// Count by x
// my solution
const countBy = (x: number, n: number) => {
  let z: number[] = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
};

// simple solution
const countBy1 = (x: number, n: number) =>
  Array.from({ length: n }, (v, k) => (k + 1) * x);

console.log(countBy1(3, 15));

// Possibilities Array
// my solution
const isAllPossibilities = (x: number[]) => {
  x.sort(function (a, b) {
    return a - b;
  });
  const b = x.map((v, i) => i);
  return x.filter((v, i) => v === b[i]).length == x.length;
};

// simple solution
function isAllPossibilities1(x: number[]) {
  return x.length > 0 ? x.every((a, i) => x.includes(i)) : false;
}

console.log(
  isAllPossibilities([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
  ])
);
