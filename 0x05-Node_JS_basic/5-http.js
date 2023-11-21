const fs = require('fs');
const util = require('util');
const http = require('http');

const readFile = util.promisify(fs.readFile);

function countStudents(path) {
  let data = '';
  try {
    data = readFile(path, 'utf8');
  }
  catch(err) {
    err.message = 'Cannot load the database';
    throw new Error('Cannot load the database');
  }
  return data;
};

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      try {
	res.write('This is the list of our students\n');
        countStudents(process.argv[2]).then((items) => {
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
	  const CS = obj.CS.length;
	  const total = SWE + CS;
	  res.write(`Number of students: ${total}\n`);
	  res.write(`Number of students in CS: ${CS}. List: ${obj.CS}\n`);
	  res.write(`Number of students in SWE: ${SWE}. List: ${obj.SWE}`);
	res.end();
	})
	.catch((err) => {
	  res.write(err.message);
	  res.end();
	});
      }
      catch(err) {
        res.write(err.message);
	res.end();
      }
      break
    default:
      res.end('Hello Holberton School!');
  }
});

app.listen(1245, 'localhost');

module.exports = app;
