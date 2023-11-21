const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

module.exports = function countStudents(path) {
  let data = '';
  try {
    data = readFile(path, 'utf8');
  }
  catch(err) {
    err.message = 'Cannot load the database';
    throw new Error('Cannot load the database');
  }
  data.then((items) => {
    const line = items.split('\n');
    const list = line.slice();
    const obj = {CS: [], SWE: []};
    for (let li of list) {
      if (li.includes('CS')) {
        const value = li.split(',').slice(0);
        obj.CS.push(' ' + value[0]);
      } else if (li.includes('SWE')) {
        const value = li.split(',').slice(0);
        obj.SWE.push(' ' + value[0]);
      }
    }
    const SWE = obj.SWE.length;
    const SC = obj.CS.length;
    const total = SWE + SC;
    console.log(`Number of students: ${total}`);
    console.log(`Number of students in CS: ${SC}. List: ${obj.CS}`);
    console.log(`Number of students in SWE: ${SWE}. List: ${obj.SWE}`);
  });
  return data;
};
