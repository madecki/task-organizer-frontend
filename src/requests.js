// import axios from 'axios';

export default function submitRegistrationData(data) {
  const {
    firstName,
    lastName,
    password,
    email,
    birthDate,
    job,
    gender,
    street,
    zipCode,
    country
  } = data;
  return Promise((resolve, reject) => {
    const connection = true;

    if (connection) {
      resolve('localhost:3210/users/register', {
        firstName,
        lastName,
        password,
        email,
        birthDate,
        job,
        gender,
        street,
        zipCode,
        country
      });
    } else reject();
  });
}
