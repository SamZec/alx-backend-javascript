export default function signUpUser(firstName, lastName) {
  const promise = new Promise((resolver) => {
    const object = {
      firstname: firstName,
      lastName: lastName
    };
    resolver(object);
  });
  promise.then((value) => value);
  return promise;
}
