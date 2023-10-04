export default function cleanSet(set, startString) {
  let string = '';
  if (startString === '' || typeof startString !== 'string') {
    return string;
  }
  set.forEach((value) => {
    if (value !== undefined) {
      if (value.match(startString)) {
        string += value.slice(startString.length, (value.length + 1));
        string += '-';
      }
    }
  });
  return string.slice(0, -1);
}
