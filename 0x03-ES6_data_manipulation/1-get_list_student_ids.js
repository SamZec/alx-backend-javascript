export default function getListStudentIds(getListStudents) {
  let ids = [];
  if (getListStudents !== null) {
    ids = getListStudents.map((object) => object.id);
  }
  return ids;
}
