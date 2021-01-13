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
  return new Promise((resolve, reject) => {
    const connection = true;
    setTimeout(() => {
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
    }, 2000);
  });
}
