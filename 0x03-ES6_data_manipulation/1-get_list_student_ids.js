export default function getListStudentIds(getListStudents) {
  let ids = [];
  if (getListStudents !== null && typeof getListStudents === 'object') {
    ids = getListStudents.map((object) => object.id);
  }
  return ids;
}
