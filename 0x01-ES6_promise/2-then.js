export default function handleResponseFromAPI(promise) {
  promise.then((value) => {
    const onbject = {
      'status': 200,
      body: 'success'
    }
    console.log('Got a response from the API')
  },
  (error) => new Error()
  );
}
