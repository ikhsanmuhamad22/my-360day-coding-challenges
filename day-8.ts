// Day 8

// If you can't sleep, just count sheep!!
const countSheep = (num: number) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += `${i + 1} sheep...`;
  }
  return result;
};

console.log(countSheep(10));

// Smoking Timmy
// i am give up and this is the solution
function startSmoking(bars: number, boxes: number) {
  return (22.5 * (10 * bars + boxes) - 0.5) | 0;
}

console.log(startSmoking(10, 2));
