export default function getListStudentIds(getListStudents) {
  let array = new Array;
  if (getListStudents.constructor === Array) {
    array = getListStudents.map((object) => object.id);
    return array;
  }
  return array;
}
