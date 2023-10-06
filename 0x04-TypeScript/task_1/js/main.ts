interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: NonNullable<boolean>;
  yearsOfExperience?: number;
  location: NonNullable<string>;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
