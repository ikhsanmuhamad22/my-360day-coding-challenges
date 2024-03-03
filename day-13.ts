// Day 13

// Total Amount of Points
// my solution
const points = (games: string[]) => {
  let result = 0;
  const ar = games.map((a, b) => a.split(''));
  for (let i = 0; i < ar.length; i++) {
    if (ar[i][0] > ar[i][2]) {
      result += 3;
    } else if (ar[i][0] < ar[i][2]) {
      result += 0;
    } else {
      result += 1;
    }
  }
  return result;
};

// best solutin
const pointss = (games: number[]) =>
  games.reduce((output: number, current: number) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);
