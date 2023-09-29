class Iteration {
  constructor(employees) {
    this.array = Object.values(employees);
  }
  *[Symbol.iterator]() {
    let index = 0;
    while(this.array[index] !== undefined) {
      if (this.array[index].length < 2) {
        yield this.array[index][0];
      } else {
	let item = 0;
	while (this.array[index][item] !== undefined) {
	  yield this.array[index][item];
	  item++;
	}
      }
        index++;
    }
  }
}

export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employee = new Iteration(employees);
  return employee;
}
