export default function handleResponseFromAPI(promise) {
  return promise.then((value) => {
    value = {
      'status': 200,
      body: 'success',
    };
    console.log('Got a response from the API');
  },
  (error) => {error = new Error('hhh')});
}
