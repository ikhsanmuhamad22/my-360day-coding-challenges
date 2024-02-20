// Day 1

// => reduce but grow
// accumalete multifly on the array
const grow = (num: number[]) => num.reduce((acc, velue) => acc * velue);
console.log(grow([1, 2, 3, 5, 10]));

// => Multiply the number
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers
// multiply(3) == 15 # 3 * 5¹
// multiply(10) == 250 # 10 * 5²
// multiply(200) == 25000 # 200 * 5³
// multiply(0) == 0 # 0 * 5¹
// multiply(-3) == -15 # -3 * 5¹
const multiply = (num: number) => num * 5 ** Math.abs(num).toString().length;
console.log(multiply(200));
