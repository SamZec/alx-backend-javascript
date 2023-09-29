class Iteration {
  constructor(list) {
    this.array = Object.values(list);
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
  const rep = report.allEmployees;
  const inst = new Iteration(rep);
  return inst;
}
