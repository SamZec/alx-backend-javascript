import {uploadPhoto, createUser} from '../utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const log = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
    console.log(log);
  },
  (error) => console.log("Signup system offline")
  );
}
