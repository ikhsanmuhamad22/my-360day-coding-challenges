// Day 3

// is he ganna survive
// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated,
// our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward
// to fight another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)

const hero = (bullets: number, dragons: number) =>
  bullets / dragons >= 2 ? true : false;

console.log(hero(10, 5));

// Remove the minimum
const removeSmallest = (numbers) =>
  numbers.filter(
    (n: number, i: number) => i !== numbers.indexOf(Math.min(...numbers))
  );

console.log(removeSmallest([5, 3, 2, 1, 4]));