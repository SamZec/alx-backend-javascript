interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: NonNullable<boolean>;
  yearsOfExperience?: number;
  location: NonNullable<string>;
  [propName: string]: any;
}

const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
};

console.log(teacher);

const teacher2: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  casual: true,
};

console.log(teacher2);
