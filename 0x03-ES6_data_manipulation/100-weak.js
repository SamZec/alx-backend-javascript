const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let counter = 0;
  if (weakMap.has(endpoint)) {
    counter = weakMap.get(endpoint);
    if (counter + 1 >= 5) {
      weakMap.set(endpoint, counter + 1);
    } else {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, counter + 1);
  }
  return endpoint;
}

export { queryAPI, weakMap };
