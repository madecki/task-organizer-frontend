import axios from 'axios';

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
  return axios.post('localhost:3210/users/register', {
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
}
