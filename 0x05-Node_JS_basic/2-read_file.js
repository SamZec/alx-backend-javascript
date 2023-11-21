const fs = require('fs');

module.exports = function countStudents(path) {
  let data = '';
  try {
    data = fs.readFileSync(path, 'utf8');
  }
  catch(err) {
    err.message = 'Cannot load the database';
    throw new Error('Cannot load the database');
  }
  const line = data.split('\n');
  const list = line.slice();
  const obj = {CS: [], SWE: []};
  for (let data of list) {
    if (data.includes('CS')) {
      const value = data.split(',').slice(0);
      obj.CS.push(' ' + value[0]);
    } else if (data.includes('SWE')) {
      const value = data.split(',').slice(0);
      obj.SWE.push(' ' + value[0]);
    }
  }
  const num = obj.SWE.length + obj.CS.length;
  console.log(`Number of students: ${num}`);
  console.log(`Number of students in CS: ${obj.CS.length}. List: ${obj.CS}`);
  console.log(`Number of students in SWE: ${obj.SWE.length}. List: ${obj.SWE}`);
};
