export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const array = getListStudents.map((student) => {
    newGrades.filter((grades) => {
      if (grades.studentId === student.id) {
        student.grade = grades.grade;
      } else {
        student.grade = 'N/A';
      }
    });
    return student;
  });
  return array;
}
