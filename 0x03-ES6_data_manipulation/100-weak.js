const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let counter = 0;
  if (weakMap.has(endpoint)) {
    counter = weakMap.get(endpoint);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, ++counter);
  } else {
    weakMap.set(endpoint, ++counter);
  }
  return endpoint;
}

export { queryAPI, weakMap };
