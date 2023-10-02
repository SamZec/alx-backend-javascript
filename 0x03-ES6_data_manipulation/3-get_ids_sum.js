export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((buf, curr) => buf + curr.id, 0);
}
