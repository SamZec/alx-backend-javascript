interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

const major: MajorCredits = { credits: 80 } as MajorCredits;
const major2: MajorCredits = { credits: 85 } as MajorCredits;
console.log(sumMajorCredits(major, major2));

console.log();

const minor: MinorCredits = { credits: 50 } as MinorCredits;
const minor2: MinorCredits = { credits: 45 } as MinorCredits;
console.log(sumMinorCredits(minor, minor2));
