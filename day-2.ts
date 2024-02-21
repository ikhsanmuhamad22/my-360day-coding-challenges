// Day 2

// Reversed sequence
// => my solution
const reverseSeq = (n: number): number[] => {
  const result: number[] = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

// simple solution
const reverseSeqq = (n: number) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

console.log(reverseSeq(10));

// => My head is at the wrong end!
const fixTheMeerkat = (arr: string[]) => {
  return arr.reverse();
};

console.log(fixTheMeerkat(['tail', 'body', 'head']));

// => The alfabeth product
// return the D between A, B, C, D
const alphabet = (ns: number[]) => {
  ns.sort((a, b) => a - b);
  let a = ns[0];
  let b = ns[1];
  let AxB = a * b;
  let c = ns[2] === AxB ? ns[3] : ns[2];

  let BxC = b * c;
  let CxD = ns[ns.length - 1];

  let d = CxD / c;

  return d;
};

console.log(alphabet([2, 6, 7, 3, 14, 35, 15, 5]));
