export default function getListStudentIds(getListStudents) {
  let ids = []
  if (getListStudents.constructor === Array) {
    ids = getListStudents.map((object) => object.id);
  }
  return ids;
}
