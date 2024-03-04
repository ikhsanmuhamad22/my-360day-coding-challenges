// Day 14

// Grasshopper - Grade book
const getGrade = (s1: number, s2: number, s3: number) => {
  const averange = Math.round((s1 + s2 + s3) / 3);
  if (averange >= 90) return 'A';
  else if (averange >= 80) return 'B';
  else if (averange >= 70) return 'C';
  else if (averange > 60) return 'D';
  else return 'F';
};

console.log(getGrade(82, 85, 87));
