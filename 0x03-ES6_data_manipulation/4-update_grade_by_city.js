export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter((location) => location.location === city)
    .map((student) => {
      const newGrade = grades
        .filter((item) => item.studentId === student.id)
        .map((item) => item.grade)[0];
      const grade = newGrade || 'N/A';
      return { ...student, grade };
    });
}
