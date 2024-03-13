// Time conversion
function timeConversion(s) {
  const a = Number(s[0] + s[1]) + 12;
  const b = s.slice(2, s.length - 2);
  if (s[8] == 'P') {
    if (s[0] == 1 && s[1] == 2) {
      return s.slice(0, s.length - 2);
    }
    return a + b;
  } else if (s[0] == 1 && s[1] == 2) {
    return '00' + b;
  } else {
    return s.slice(0, s.length - 2);
  }
}

console.log(timeConversion('12:45:54PM'));

// Find the median
const findMedian = (arr) => {
  const sort = arr.sort((a, b) => a - b);
  console.log(sort);
  if (arr.length % 2) {
    return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
  }
};

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));

// Lonely Integer
function lonelyinteger(a) {
  if (a.length == 1) return a[0];
  for (const num of a) {
    if (a.indexOf(num) === a.lastIndexOf(num)) return num;
  }
}
console.log(lonelyinteger([4, 9, 95, 93, 57, 4, 57, 93, 9]));


// Diagonal Different
function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diag1 += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        diag2 += arr[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
}
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
