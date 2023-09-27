export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      const object = {
        'status': 200,
	 body: 'Success'
      };
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  promise.then((value) => value,
    (error) => error
  );
  return promise;
}
