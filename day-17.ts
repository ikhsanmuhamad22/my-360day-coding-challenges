// Day 17
// Area of parameter
const areaOrPerimeter = (l: number, w: number) =>
  l === w ? l * w : 2 * (l + w);
console.log(areaOrPerimeter(6, 10));
