/// <reference path = 'subjects/Java.ts' />
/// <reference path = 'subjects/React.ts' />
/// <reference path = 'subjects/Teacher.ts' />
/// <reference path = 'subjects/Cpp.ts' />
/// <reference path = 'subjects/Subject.ts' />

const cpp = new Subjects.Cpp();

const java = new Subjects.JavaClass();

const react = new Subjects.ReactClass();

const cTeacher = {
  firstName: 'Affum',
  lastName: 'Samuel',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
