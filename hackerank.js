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
