// Day 18

// Grasshopper - Personalized Message
const greet = (name: string, owner: string) =>
  name == owner ? 'Hello boss' : 'Hello gues';
console.log(greet('Daniel', 'Daniel'));
