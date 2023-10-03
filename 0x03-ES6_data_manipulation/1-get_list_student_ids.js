export default function getListStudentIds(getListStudents) {
  if (getListStudents.constructor === Array) {
    return getListStudents.map((object) => object.id);
  }
  return new Array();
}
