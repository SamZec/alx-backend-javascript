export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  let array = getListStudents.map(function (student) {
    newGrades.filter(function (grades) {
      if (grades.studentId === student.id) {
        student['grade'] = grades.grade;
      } else {
	student['grade'] = 'N/A';
      }
    })
     return student;
  });
  return array;
}
