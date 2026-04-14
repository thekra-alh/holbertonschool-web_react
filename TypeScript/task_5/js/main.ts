interface MajorCredits {
  credits: number;
  readonly __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  readonly __brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}

const majorCredits1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const majorCredits2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const minorCredits1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const minorCredits2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };

console.log(sumMajorCredits(majorCredits1, majorCredits2));
console.log(sumMinorCredits(minorCredits1, minorCredits2));
