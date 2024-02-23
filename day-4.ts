// Day 4

// Sentence Smash
const smash = (words: string[]) => words.join(' ');

console.log(smash(['hello', 'amazing', 'world']));

// Number of People in the Bus
// my solution
const number = (busStops: any) => {
  let naik = 0;
  let turun = 0;
  for (let i = 0; i < busStops.length; i++) {
    naik += busStops[i][0];
    turun += busStops[i][1];
  }
  return naik - turun;
};

// best solution
const numberr = (busStops: any) =>
  busStops.reduce((rem: any, [on, off]) => rem + on - off, 0);

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

// Remove the minimum
const removeTheSmallest = (numbers: number[]) => {
  const min = Math.min(...numbers);
  return numbers.filter((v) => v !== min);
};

console.log(removeTheSmallest([5, 3, 2, 1, 4]));
