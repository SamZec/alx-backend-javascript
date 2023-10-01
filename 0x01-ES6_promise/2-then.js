export default function handleResponseFromAPI(promise) {
  return promise.then((value) => {
    return {
      value: value,
      'status': 200,
      body: 'success',
    };
    console.log('Got a response from the API');
  },
  (err) => {
    return { 
      err: err,
      error: new Error(),
    };
  });
}
