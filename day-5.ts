// Day 5

// will you make it
const zeroFuel = (distanceToPump: number, mpg: number, fuelLeft: number) =>
  distanceToPump / fuelLeft <= mpg;

console.log(zeroFuel(100, 51, 3));

// List Filtering
const filter_list = (l: (number | string)[]) =>
  l.filter((v) => typeof v === 'number');

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
