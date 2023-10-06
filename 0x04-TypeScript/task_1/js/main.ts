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

interface printTeacherFunction {
  (firsName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
};
