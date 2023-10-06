interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'Samuel',
  lastName: 'Affum',
  age: 23,
  location: 'Ghana',
};

const student2: Student = {
  firstName: 'Joseph',
  lastName: 'Asemonu',
  age: 25,
  location: 'Togo',
};

const studentArray = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

for (let item of studentArray) {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  const tdElement = document.createElement('td');
  tdElement.innerHTML = `${item.firstName} ${item.location}`;
  tr.appendChild(tdElement);
}
