import axios from 'axios';

export default function submitRegistrationData(data) {
  return axios.post('localhost:3210/users/register', {
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    email: data.email,
    birthDate: data.birthDate,
    job: data.job,
    gender: data.gender,
    street: data.street,
    zipCode: data.zipCode,
    country: data.country
  });
}
