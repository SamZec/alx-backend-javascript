export default function iterateThroughObject(reportWithIterator) {
  const array = [];
  let str = '';

  for (const item of reportWithIterator) {
    array.push(item);
  }

  for (let i = 0; i < array.length; i++) {
    str += array[i];
    if (array[i + 1] !== undefined) {
      str += ' | ';
    }
  }

  return str;
}
