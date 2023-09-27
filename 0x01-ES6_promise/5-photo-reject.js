export default function uploadPhoto(filename) {
  const promise = new Promise((resolve, reject) => {
    if (filename) {
      reject(Error(`${filename} cannot be processed`));
    }
  });
  promise.catch((error) => error);
  return promise;
}
