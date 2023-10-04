const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let counter = 0;
  if (weakMap.has(endpoint)) {
    counter = weakMap.get(endpoint);
    weakMap.set(endpoint, counter + 1);
    if ( weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, counter + 1);
  }
  return endpoint;
}

export { queryAPI, weakMap };
