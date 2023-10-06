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

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

interface Inst {
  firstName: string;
  lastName: string;
}

class StudentClass implements Student {
  _firstName: string;
  _lastName: string;

  constructor(firstName: Inst['firstName'], lastName: Inst['lastName']) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this._firstName}`;
  }
}
