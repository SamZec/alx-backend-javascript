export default function handleResponseFromAPI(promise) {
  return promise.then((value) => {
    console.log('Got a response from the API');
    return {
      value,
      status: 200,
      body: 'success',
    };
  }).catch((error) => {
    if (error) {
      return new Error();
    }
    return error;
  });
}
