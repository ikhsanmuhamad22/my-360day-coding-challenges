// Day 15
// Sum Without Highest and Lowest
const sumArray = (array: number[]) => {
  if (!array || array.length < 3) {
    return 0;
  }
  const sort = array.sort((a, b) => a - b);
  return sort.slice(1, -1).reduce((acc, cr) => acc + cr);
};

console.log(sumArray([0, 1, 6, 10, 10]), 3);
