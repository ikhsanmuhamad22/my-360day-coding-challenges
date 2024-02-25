// Day 6

// DNA to RNA Conversion
// My solusion
const DNAtoRNA = (dna: string) => {
  let RNA = '';
  for (let i = 0; i < dna.length; i++) {
    RNA += dna[i].replace('T', 'U');
  }
  return RNA;
};
// best solusion
const DNAtoRNA1 = (dna: string) => dna.replace(/T/g, 'U');
// or
const DNAtoRNA2 = (dna: string) =>
  dna
    .split('')
    .map((v) => (v == 'T' ? (v = 'U') : v))
    .join();

console.log(DNAtoRNA('TTTGTT'));

// Array Array Array
// my solution is very bar bar
const explode = (x: (number | string)[]) => {
  let result: any = [];
  if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    for (let i = 0; i < x[0] + x[1]; i++) {
      result.push(x);
    }
  } else if (typeof x[0] === 'number' && typeof x[1] === 'string') {
    for (let i = 0; i < x[0]; i++) {
      result.push(x);
    }
  } else if (typeof x[0] === 'string' && typeof x[1] === 'number') {
    for (let i = 0; i < x[1]; i++) {
      result.push(x);
    }
  } else {
    result = 'Void!';
  }
  return result;
};

// best solution
const explode1 = (x: (string | number)[]) => {
  let [a, b] = x;

  if (typeof a == 'number' && typeof b == 'number')
    return new Array(a + b).fill(x);
  else if (typeof a == 'number') return new Array(a).fill(x);
  else if (typeof b == 'number') return new Array(b).fill(x);

  return 'Void!';
};

console.log(explode([9, 3]));
